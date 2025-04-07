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
    item_quantity
  } = req.body;

  // Parse IDs to ensure they are integers or null
  const order_id = is_custom_order && rawOrderId ? parseInt(rawOrderId, 10) : null;
  const item_id = !is_custom_order && rawItemId ? parseInt(rawItemId, 10) : null;

  // Validate required fields
  if (!customer_name || !total_amount || !advance_amount) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Calculate balance
  const balance_amount = total_amount - advance_amount;

  // Determine payment status
  let payment_status = 'Partially Paid';
  if (balance_amount <= 0) {
    payment_status = 'Completed';
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
      order_id || null,
      item_id || null,
      item_quantity || null
    ];

    // Log the SQL parameters
    console.log('SQL parameters:', insertParams);

    con.query(insertSql, insertParams, (err, result) => {
      if (err) {
        console.error("Error creating advance payment:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }

      res.status(201).json({
        message: "Advance payment created successfully",
        payment_id: result.insertId,
        payment_reference
      });
    });
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

      res.json({
        message: "Advance payment updated successfully",
        payment_id: paymentId,
        new_advance_amount: newAdvanceAmount,
        new_balance_amount: newBalanceAmount,
        payment_status: newPaymentStatus
      });
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
  const sql = `
    SELECT
      o.order_id,
      o.order_reference,
      o.customer_name,
      o.total_amount,
      o.status
    FROM
      orders o
    WHERE
      o.status IN ('Pending', 'In Progress')
    ORDER BY
      o.order_date DESC
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching custom orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results || []);
  });
});

export { router as advancePaymentRouter };
