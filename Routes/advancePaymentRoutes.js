import express from 'express';
import con from '../utils/db.js';

const router = express.Router();

// Get all advance payments
router.get("/", (req, res) => {
  console.log('GET /advance-payments - Fetching all advance payments');

  const sql = `
    SELECT * FROM advance_payment_details
    ORDER BY payment_date DESC
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching advance payments:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results || []);
  });
});

// Get advance payment by ID
router.get("/:id", (req, res) => {
  const paymentId = req.params.id;

  const sql = `
    SELECT * FROM advance_payment_details
    WHERE payment_id = ?
  `;

  con.query(sql, [paymentId], (err, results) => {
    if (err) {
      console.error("Error fetching advance payment:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Advance payment not found" });
    }

    res.json(results[0]);
  });
});

// Create a new advance payment
router.post("/create", (req, res) => {
  console.log('POST /advance-payments/create - Creating new advance payment');

  const {
    customer_name,
    total_amount,
    advance_amount,
    payment_method,
    notes,
    created_by,
    branch_id,
    is_custom_order,
    order_id: rawOrderId,
    item_id: rawItemId,
    item_quantity,
    existing_advance_amount, // New field for existing advance payments
    balance_amount: clientBalanceAmount // Balance amount calculated by client
  } = req.body;

  console.log('Request body:', req.body);

  // Parse IDs to ensure they are integers or null
  const order_id = rawOrderId ? parseInt(rawOrderId, 10) : null;
  const item_id = rawItemId ? parseInt(rawItemId, 10) : null;

  console.log(`Parsed order_id: ${order_id}, is_custom_order: ${is_custom_order}`);

  // Validate required fields
  if (!customer_name || !total_amount || !advance_amount) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Calculate balance, accounting for existing advance payments
  let balance_amount;

  if (existing_advance_amount && parseFloat(existing_advance_amount) > 0) {
    // If there's an existing advance payment, use it in the calculation
    const existingAdvance = parseFloat(existing_advance_amount);
    console.log(`Using existing advance amount: ${existingAdvance}`);

    // Calculate: total - (existing advance + new advance)
    balance_amount = parseFloat(total_amount) - (existingAdvance + parseFloat(advance_amount));
    console.log(`Balance calculation: ${total_amount} - (${existingAdvance} + ${advance_amount}) = ${balance_amount}`);
  } else {
    // Standard calculation
    balance_amount = parseFloat(total_amount) - parseFloat(advance_amount);
    console.log(`Standard balance calculation: ${total_amount} - ${advance_amount} = ${balance_amount}`);
  }

  // Use client-calculated balance if provided (as a double-check)
  if (clientBalanceAmount !== undefined) {
    console.log(`Client calculated balance: ${clientBalanceAmount}, Server calculated: ${balance_amount}`);
    // We could use the client value, but server calculation is more reliable
  }

  // Determine payment status
  let payment_status = 'Partially Paid';
  if (balance_amount <= 0) {
    payment_status = 'Completed';
  } else if (parseFloat(advance_amount) <= 0) {
    payment_status = 'Not Paid';
  }

  // Generate payment reference (ADV-YYYY-XXXX)
  const year = new Date().getFullYear();
  const referencePrefix = `ADV-${year}-`;

  // Get the next sequence number
  const sequenceQuery = `
    SELECT MAX(SUBSTRING_INDEX(payment_reference, '-', -1)) as max_seq
    FROM advance_payments
    WHERE payment_reference LIKE ?
  `;

  con.query(sequenceQuery, [`${referencePrefix}%`], (err, results) => {
    if (err) {
      console.error("Error generating payment reference:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    let nextSeq = 1;
    if (results[0].max_seq) {
      nextSeq = parseInt(results[0].max_seq) + 1;
    }

    const payment_reference = `${referencePrefix}${nextSeq.toString().padStart(4, '0')}`;

    // Insert the advance payment
    const insertSql = `
      INSERT INTO advance_payments (
        payment_reference,
        customer_name,
        total_amount,
        advance_amount,
        balance_amount,
        payment_status,
        payment_method,
        notes,
        created_by,
        branch_id,
        is_custom_order,
        order_id,
        item_id,
        item_quantity
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Log the received data
    console.log('Creating advance payment with data:', {
      is_custom_order,
      order_id,
      item_id,
      customer_name,
      total_amount,
      advance_amount
    });

    const insertParams = [
      payment_reference,
      customer_name,
      total_amount,
      advance_amount,
      balance_amount,
      payment_status,
      payment_method || 'Cash',
      notes || '',
      created_by,
      branch_id,
      is_custom_order ? 1 : 0,
      order_id, // Use order_id for both custom and regular orders
      item_id || null,
      item_quantity || null
    ];

    console.log('Insert parameters for advance payment:', insertParams);

    // If this is a custom order, we need to handle it differently
    if (is_custom_order && order_id) {
      // First, check if the custom order exists
      const checkCustomOrderSql = `SELECT order_id FROM custom_orders WHERE order_id = ?`;

      con.query(checkCustomOrderSql, [order_id], (checkErr, checkResults) => {
        if (checkErr) {
          console.error("Error checking custom order:", checkErr);
          return res.status(500).json({ message: "Database error", error: checkErr.message });
        }

        if (checkResults.length === 0) {
          return res.status(400).json({
            message: "The selected custom order does not exist. Please refresh and try again."
          });
        }

        // The custom order exists, proceed with the insert
        executeInsert();
      });
    } else {
      // Not a custom order, proceed with the insert
      executeInsert();
    }

    function executeInsert() {
      // Log the SQL parameters
      console.log('SQL parameters:', insertParams);

      con.query(insertSql, insertParams, (err, result) => {
      if (err) {
        console.error("Error creating advance payment:", err);
        console.error("SQL query:", insertSql);
        console.error("Parameters:", JSON.stringify(insertParams, null, 2));

        // Check for specific error types
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({
            message: "This payment has already been processed. Please refresh the page and try again.",
            error: err.message
          });
        }

        if (err.code === 'ER_NO_REFERENCED_ROW_2') {
          return res.status(400).json({
            message: "The selected order or item does not exist. Please refresh and try again.",
            error: err.message
          });
        }

        return res.status(500).json({ message: "Database error", error: err.message });
      }

      // If this is a custom order, update the payment status in the custom_orders table
      if (is_custom_order && order_id) {
        console.log(`Updating custom order payment status for order_id: ${order_id}`);
        // We're using order_id as custom_order_id in the SQL
        // Calculate total payments for this order
        const getTotalPaymentsSql = `
          SELECT SUM(advance_amount) as total_paid,
                 (SELECT estimated_amount FROM custom_orders WHERE order_id = ?) as total_amount
          FROM advance_payments
          WHERE order_id = ? AND is_custom_order = 1
        `;

        console.log(`Executing SQL to get total payments for order_id: ${order_id}`);

        con.query(getTotalPaymentsSql, [order_id, order_id], (paymentErr, paymentResults) => {
          if (paymentErr) {
            console.error("Error calculating total payments:", paymentErr);
            // Continue with the original payment status
            updateOrderStatus(payment_status);
            return;
          }

          // Calculate the correct payment status based on all payments
          const totalPaid = paymentResults[0].total_paid || 0;
          const totalAmount = paymentResults[0].total_amount || 0;

          console.log(`Total paid: ${totalPaid}, Total amount: ${totalAmount}`);

          // Map the payment status to the custom_orders enum values
          let updatedPaymentStatus;
          if (totalPaid >= totalAmount) {
            updatedPaymentStatus = 'Fully Paid'; // Use 'Fully Paid' for custom_orders table
          } else if (totalPaid > 0) {
            updatedPaymentStatus = 'Partially Paid';
          } else {
            updatedPaymentStatus = 'Not Paid';
          }

          console.log(`Calculated payment status: ${updatedPaymentStatus} (Total paid: ${totalPaid}, Total amount: ${totalAmount})`);

          // Update the custom order with the correct status
          updateOrderStatus(updatedPaymentStatus, totalPaid);
        });

        function updateOrderStatus(status, paidAmount) {
          console.log(`Updating order status to: ${status}, advance_amount: ${paidAmount} for order_id: ${order_id}`);
          const updateOrderSql = `
            UPDATE custom_orders
            SET payment_status = ?, advance_amount = ?
            WHERE order_id = ?
          `;

          con.query(updateOrderSql, [status, paidAmount, order_id], (updateErr) => {
            if (updateErr) {
              console.error("Error updating custom order payment status:", updateErr);
              // Continue despite the error, just log it
            }

            res.status(201).json({
              message: "Advance payment created successfully",
              payment_id: result.insertId,
              payment_reference,
              payment_status: status
            });
          });
        }
      } else {
        res.status(201).json({
          message: "Advance payment created successfully",
          payment_id: result.insertId,
          payment_reference,
          payment_status
        });
      }
    });
    }
  });
});

// Update an advance payment (for additional payments)
router.put("/:id", (req, res) => {
  const paymentId = req.params.id;
  const { additional_payment, notes } = req.body;

  if (!additional_payment || additional_payment <= 0) {
    return res.status(400).json({ message: "Invalid payment amount" });
  }

  // Get current payment details
  const getSql = "SELECT * FROM advance_payments WHERE payment_id = ?";

  con.query(getSql, [paymentId], (err, results) => {
    if (err) {
      console.error("Error fetching advance payment:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Advance payment not found" });
    }

    const payment = results[0];
    const newAdvanceAmount = parseFloat(payment.advance_amount) + parseFloat(additional_payment);
    const newBalanceAmount = parseFloat(payment.total_amount) - newAdvanceAmount;

    // Determine new payment status
    let newPaymentStatus = 'Partially Paid';
    if (newBalanceAmount <= 0) {
      newPaymentStatus = 'Completed';
    } else if (newAdvanceAmount <= 0) {
      newPaymentStatus = 'Not Paid';
    }

    // Update the payment
    const updateSql = `
      UPDATE advance_payments
      SET advance_amount = ?,
          balance_amount = ?,
          payment_status = ?,
          notes = CONCAT(notes, '\n', ?)
      WHERE payment_id = ?
    `;

    const updateParams = [
      newAdvanceAmount,
      newBalanceAmount,
      newPaymentStatus,
      `Additional payment of ${additional_payment} received on ${new Date().toISOString().split('T')[0]}. ${notes || ''}`,
      paymentId
    ];

    con.query(updateSql, updateParams, (err, result) => {
      if (err) {
        console.error("Error updating advance payment:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }

      // If this is a custom order, update the payment status in the custom_orders table
      if (payment.is_custom_order && payment.order_id) {
        // First, check if the custom order exists
        const checkCustomOrderSql = `SELECT order_id FROM custom_orders WHERE order_id = ?`;

        con.query(checkCustomOrderSql, [payment.order_id], (checkErr, checkResults) => {
          if (checkErr) {
            console.error("Error checking custom order:", checkErr);
            return res.status(500).json({ message: "Database error", error: checkErr.message });
          }

          if (checkResults.length === 0) {
            return res.status(400).json({
              message: "The selected custom order does not exist. Please refresh and try again."
            });
          }

          // The custom order exists, proceed with the update
          // Calculate total payments for this order
          const getTotalPaymentsSql = `
            SELECT SUM(advance_amount) as total_paid,
                   (SELECT estimated_amount FROM custom_orders WHERE order_id = ?) as total_amount
            FROM advance_payments
            WHERE order_id = ? AND is_custom_order = 1
          `;

          con.query(getTotalPaymentsSql, [payment.order_id, payment.order_id], (paymentErr, paymentResults) => {
            if (paymentErr) {
              console.error("Error calculating total payments:", paymentErr);
              // Continue with the original payment status
              updateCustomOrderStatus(newPaymentStatus);
              return;
            }

            // Calculate the correct payment status based on all payments
            const totalPaid = paymentResults[0].total_paid || 0;
            const totalAmount = paymentResults[0].total_amount || 0;

            console.log(`Total paid: ${totalPaid}, Total amount: ${totalAmount}`);

            // Map the payment status to the custom_orders enum values
            let updatedPaymentStatus;
            if (totalPaid >= totalAmount) {
              updatedPaymentStatus = 'Fully Paid'; // Use 'Fully Paid' for custom_orders table
            } else if (totalPaid > 0) {
              updatedPaymentStatus = 'Partially Paid';
            } else {
              updatedPaymentStatus = 'Not Paid';
            }

            console.log(`Calculated payment status: ${updatedPaymentStatus} (Total paid: ${totalPaid}, Total amount: ${totalAmount})`);

            // Update the custom order with the correct status
            updateCustomOrderStatus(updatedPaymentStatus, totalPaid);
          });

          // Function to update the custom order status
          function updateCustomOrderStatus(status, paidAmount) {
            console.log(`Updating custom order status to: ${status}, advance_amount: ${paidAmount} for order_id: ${payment.order_id}`);
            const updateOrderSql = `
              UPDATE custom_orders
              SET payment_status = ?, advance_amount = ?
              WHERE order_id = ?
            `;

            con.query(updateOrderSql, [status, paidAmount, payment.order_id], (updateErr) => {
              if (updateErr) {
                console.error("Error updating custom order payment status:", updateErr);
                // Continue despite the error, just log it
              }

              res.json({
                message: "Advance payment updated successfully",
                payment_id: paymentId,
                new_advance_amount: newAdvanceAmount,
                new_balance_amount: newBalanceAmount,
                payment_status: status
              });
            });
          }
        });
      } else {
        res.json({
          message: "Advance payment updated successfully",
          payment_id: paymentId,
          new_advance_amount: newAdvanceAmount,
          new_balance_amount: newBalanceAmount,
          payment_status: newPaymentStatus
        });
      }
    });
  });
});

// Get available jewellery items for advance payment
router.get("/items/available", (_req, res) => {
  const sql = `
    SELECT
      item_id,
      product_title,
      category,
      selling_price,
      in_stock
    FROM
      jewellery_items
    WHERE
      in_stock > 0
    ORDER BY
      category, product_title
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching available items:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results || []);
  });
});

// Get custom orders for advance payment
router.get("/orders/custom", (_req, res) => {
  console.log('GET /advance-payments/orders/custom - Fetching custom orders for advance payment');

  // Use the custom_order_details view to get more comprehensive information
  const sql = `
    SELECT
      co.order_id,
      co.order_reference,
      co.customer_name,
      co.customer_phone,
      co.customer_email,
      co.estimated_amount,
      co.advance_amount,
      co.description,
      co.special_requirements,
      co.order_status as status,
      co.payment_status,
      co.estimated_completion_date
    FROM
      custom_orders co
    WHERE
      co.order_status IN ('Pending', 'In Progress')
      AND (co.payment_status IS NULL OR co.payment_status != 'Fully Paid')
    ORDER BY
      co.order_date DESC
  `;

  console.log('Fetching custom orders that are not fully paid');

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching custom orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results || []);
  });
});

export { router as advancePaymentRouter };
