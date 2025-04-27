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
    
    return res.json({ success: true, data: results });
  });
});

// Create a new supplier payment
router.post('/create', (req, res) => {
  const { order_id, amount_paid, payment_method, notes, created_by } = req.body;
  
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
    const totalAmount = parseFloat(order.total_amount);
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
      if (existingPayments === 0 && advancePaymentAmount < (totalAmount * 0.25)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Advance payment must be at least 25% of the total amount',
          minimumRequired: (totalAmount * 0.25).toFixed(2),
          totalAmount: totalAmount.toFixed(2)
        });
      }
      
      // If total paid exceeds total amount, reject
      if (totalPaidAfterThisPayment > totalAmount) {
        return res.status(400).json({ 
          success: false, 
          message: 'Total payments cannot exceed the order amount',
          currentlyPaid: existingPayments.toFixed(2),
          totalAmount: totalAmount.toFixed(2),
          remainingAmount: (totalAmount - existingPayments).toFixed(2)
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
        if (totalPaidAfterThisPayment >= totalAmount) {
          paymentStatus = 'Completed';
        } else if (existingPayments === 0) {
          // This is the first payment (advance payment)
          // Update the advance_payment_amount in orders table
          const updateOrderQuery = `
            UPDATE orders 
            SET advance_payment_amount = ?, 
                payment_status = ?,
                total_payment_amount = ?
            WHERE order_id = ?
          `;
          
          con.query(updateOrderQuery, [
            amount_paid, 
            paymentStatus,
            totalAmount,
            order_id
          ], (err) => {
            if (err) {
              console.error('Error updating order payment status:', err);
              // Don't return error here, as payment was already created
            }
          });
        } else {
          // Update payment status only
          const updateStatusQuery = 'UPDATE orders SET payment_status = ? WHERE order_id = ?';
          con.query(updateStatusQuery, [paymentStatus, order_id], (err) => {
            if (err) {
              console.error('Error updating order payment status:', err);
              // Don't return error here, as payment was already created
            }
          });
        }
        
        return res.json({ 
          success: true, 
          message: 'Supplier payment created successfully',
          data: {
            payment_id: result.insertId,
            order_id,
            amount_paid,
            payment_status: paymentStatus,
            total_paid: totalPaidAfterThisPayment.toFixed(2),
            remaining: (totalAmount - totalPaidAfterThisPayment).toFixed(2)
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
