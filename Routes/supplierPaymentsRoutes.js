import express from 'express';
import con from '../utils/db.js';

const router = express.Router();

// Get all supplier payments
router.get('/', (req, res) => {
  const query = `
    SELECT sp.*, o.category, s.name as supplier_name
    FROM supplier_payments sp
    JOIN orders o ON sp.order_id = o.order_id
    JOIN suppliers s ON o.supplier_id = s.supplier_id
    ORDER BY sp.payment_date DESC
  `;

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching supplier payments:', err);
      return res.status(500).json({ success: false, message: 'Database error', error: err.message });
    }

    return res.json({ success: true, data: results });
  });
});

// Get payments for a specific order
router.get('/order/:orderId', (req, res) => {
  const { orderId } = req.params;

  // First get the order details
  con.query("SELECT * FROM orders WHERE order_id = ?", [orderId], (orderErr, orderResults) => {
    if (orderErr) {
      console.error('Error fetching order details:', orderErr);
      return res.status(500).json({ success: false, message: 'Database error', error: orderErr.message });
    }

    if (orderResults.length === 0) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    const order = orderResults[0];

    // Then get all payments for this order
    const query = `
      SELECT * FROM supplier_payments
      WHERE order_id = ?
      ORDER BY payment_date DESC
    `;

    con.query(query, [orderId], (err, results) => {
      if (err) {
        console.error('Error fetching supplier payments for order:', err);
        return res.status(500).json({ success: false, message: 'Database error', error: err.message });
      }

      // Calculate total paid amount
      const totalPaid = results.reduce((sum, payment) => sum + parseFloat(payment.amount_paid), 0);

      // Return both the payments and the summary
      return res.json({
        success: true,
        data: results,
        summary: {
          order_id: parseInt(orderId),
          total_amount: parseFloat(order.total_amount),
          advance_payment_amount: parseFloat(order.advance_payment_amount),
          total_paid: totalPaid,
          remaining_balance: parseFloat(order.total_amount) - totalPaid,
          payment_status: order.payment_status,
          payment_count: results.length
        }
      });
    });
  });
});

// Create a new supplier payment
router.post('/create', (req, res) => {
  const {
    order_id,
    amount_paid, // Current payment amount
    existing_payment, // Previously paid amount
    total_advance_payment, // Total of all payments
    payment_method,
    notes,
    created_by,
    making_charges,
    estimated_price,
    total_amount,
    use_custom_estimate
  } = req.body;

  if (!order_id || !amount_paid) {
    return res.status(400).json({ success: false, message: 'Order ID and amount are required' });
  }

  // First, get the order details to validate payment amount
  const getOrderQuery = 'SELECT * FROM orders WHERE order_id = ?';

  con.query(getOrderQuery, [order_id], (err, orderResults) => {
    if (err) {
      console.error('Error fetching order details:', err);
      return res.status(500).json({ success: false, message: 'Database error', error: err.message });
    }

    if (orderResults.length === 0) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    const order = orderResults[0];
    // Use the provided total amount or fall back to the existing one
    const orderTotalAmount = total_amount ? parseFloat(total_amount) : parseFloat(order.total_amount);
    const advancePaymentAmount = parseFloat(amount_paid);

    // Check if this is the first payment (advance payment)
    const checkPaymentsQuery = 'SELECT SUM(amount_paid) as total_paid FROM supplier_payments WHERE order_id = ?';

    con.query(checkPaymentsQuery, [order_id], (err, paymentResults) => {
      if (err) {
        console.error('Error checking existing payments:', err);
        return res.status(500).json({ success: false, message: 'Database error', error: err.message });
      }

      const existingPayments = paymentResults[0].total_paid || 0;
      const totalPaidAfterThisPayment = parseFloat(existingPayments) + advancePaymentAmount;

      // If this is the first payment, ensure it's at least 25% of the total
      if (existingPayments === 0 && advancePaymentAmount < (orderTotalAmount * 0.25)) {
        return res.status(400).json({
          success: false,
          message: 'Advance payment must be at least 25% of the total amount',
          minimumRequired: (orderTotalAmount * 0.25).toFixed(2),
          totalAmount: orderTotalAmount.toFixed(2)
        });
      }

      // If total paid exceeds total amount, reject
      if (totalPaidAfterThisPayment > orderTotalAmount) {
        return res.status(400).json({
          success: false,
          message: 'Total payments cannot exceed the order amount',
          currentlyPaid: existingPayments.toFixed(2),
          totalAmount: orderTotalAmount.toFixed(2),
          remainingAmount: (orderTotalAmount - existingPayments).toFixed(2)
        });
      }

      // Insert the payment
      const insertPaymentQuery = `
        INSERT INTO supplier_payments
        (order_id, amount_paid, payment_method, notes, created_by)
        VALUES (?, ?, ?, ?, ?)
      `;

      con.query(insertPaymentQuery, [
        order_id,
        amount_paid,
        payment_method || 'Cash',
        notes || '',
        created_by || null
      ], (err, result) => {
        if (err) {
          console.error('Error creating supplier payment:', err);
          return res.status(500).json({ success: false, message: 'Database error', error: err.message });
        }

        // Update the order's payment status
        let paymentStatus = 'Partial';
        // Use total_advance_payment if provided, otherwise use calculated total
        const totalPaid = total_advance_payment || totalPaidAfterThisPayment;
        if (totalPaid >= orderTotalAmount) {
          paymentStatus = 'Completed';
        }

        // Check if use_custom_estimate column exists
        con.query("SHOW COLUMNS FROM orders LIKE 'use_custom_estimate'", (customColumnErr, customColumnResults) => {
          if (customColumnErr) {
            console.error("Error checking for use_custom_estimate column:", customColumnErr);
          } else if (customColumnResults.length === 0) {
            // Add the column if it doesn't exist
            const alterTableSql = `
              ALTER TABLE orders
              ADD COLUMN use_custom_estimate TINYINT(1) DEFAULT 0
            `;

            con.query(alterTableSql, (alterErr) => {
              if (alterErr) {
                console.error("Error adding use_custom_estimate column:", alterErr);
              } else {
                console.log("Added use_custom_estimate column to orders table");
              }
            });
          }
        });

        // Update the order with new values
        const updateOrderQuery = `
          UPDATE orders
          SET advance_payment_amount = ?,
              payment_status = ?,
              total_payment_amount = ?
              ${making_charges ? ', making_charges = ?' : ''}
              ${estimated_price ? ', estimated_price = ?' : ''}
              ${total_amount ? ', total_amount = ?' : ''}
              ${use_custom_estimate !== undefined ? ', use_custom_estimate = ?' : ''}
          WHERE order_id = ?
        `;

        // Build the values array based on which fields are provided
        const updateValues = [
          total_advance_payment || existingPayments + parseFloat(amount_paid), // Use total advance payment if provided
          paymentStatus,
          orderTotalAmount
        ];

        // Add optional fields if provided
        if (making_charges) updateValues.push(making_charges);
        if (estimated_price) updateValues.push(estimated_price);
        if (total_amount) updateValues.push(total_amount);
        if (use_custom_estimate !== undefined) updateValues.push(use_custom_estimate ? 1 : 0);

        // Add the order_id at the end
        updateValues.push(order_id);

        con.query(updateOrderQuery, updateValues, (err) => {
          if (err) {
            console.error('Error updating order details:', err);
            // Don't return error here, as payment was already created
          }
        });

        // Use total_advance_payment if provided, otherwise use calculated total
        const totalPaidAmount = total_advance_payment || totalPaidAfterThisPayment;

        return res.json({
          success: true,
          message: 'Supplier payment processed successfully',
          data: {
            payment_id: result.insertId,
            order_id,
            current_payment: parseFloat(amount_paid),
            existing_payment: parseFloat(existing_payment || 0),
            total_advance_payment: parseFloat(totalPaidAmount),
            payment_status: paymentStatus,
            total_paid: totalPaidAmount.toFixed(2),
            remaining: (orderTotalAmount - totalPaidAmount).toFixed(2)
          }
        });
      });
    });
  });
});

// Get supplier payment summary (for dashboard)
router.get('/summary', (req, res) => {
  const query = `
    SELECT
      SUM(sp.amount_paid) as total_paid,
      COUNT(DISTINCT sp.order_id) as orders_with_payments,
      (SELECT COUNT(*) FROM orders WHERE payment_status = 'Completed') as fully_paid_orders,
      (SELECT COUNT(*) FROM orders WHERE payment_status = 'Partial') as partially_paid_orders,
      (SELECT COUNT(*) FROM orders WHERE payment_status = 'Pending') as pending_payment_orders,
      (SELECT SUM(total_amount) FROM orders) as total_order_amount,
      (SELECT SUM(total_amount - IFNULL(
        (SELECT SUM(amount_paid) FROM supplier_payments WHERE order_id = orders.order_id), 0
      )) FROM orders) as total_outstanding
    FROM
      supplier_payments sp
  `;

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching supplier payment summary:', err);
      return res.status(500).json({ success: false, message: 'Database error', error: err.message });
    }

    return res.json({ success: true, data: results[0] });
  });
});

export { router as supplierPaymentsRouter };
