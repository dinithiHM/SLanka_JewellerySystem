import express from 'express';
import con from '../utils/db.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = express.Router();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../Public/uploads/custom_orders');

    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'custom-order-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(new Error('Only image files are allowed!'));
  }
});

// Get all custom orders
router.get("/", (req, res) => {
  console.log('GET /custom-orders - Fetching all custom orders');

  // Get query parameters
  const status = req.query.status;
  const branchId = req.query.branch_id;

  let sql = `
    SELECT * FROM custom_order_details
  `;

  // Add WHERE clause if filters are provided
  const whereConditions = [];
  const queryParams = [];

  if (status && status !== 'all') {
    whereConditions.push('order_status = ?');
    queryParams.push(status);
  }

  if (branchId) {
    whereConditions.push('branch_id = ?');
    queryParams.push(branchId);
  }

  if (whereConditions.length > 0) {
    sql += ' WHERE ' + whereConditions.join(' AND ');
  }

  // Add ORDER BY clause
  sql += ' ORDER BY order_date DESC';

  con.query(sql, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching custom orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results || []);
  });
});

// Get custom order by ID
router.get("/:id", (req, res) => {
  const orderId = req.params.id;

  const sql = `
    SELECT
      co.*,
      (
        COALESCE(SUM(ap.advance_amount), 0) +
        COALESCE((SELECT SUM(payment_amount) FROM custom_order_payments WHERE order_id = co.order_id), 0)
      ) as actual_advance_amount,
      (
        co.estimated_amount -
        (COALESCE(SUM(ap.advance_amount), 0) +
         COALESCE((SELECT SUM(payment_amount) FROM custom_order_payments WHERE order_id = co.order_id), 0))
      ) as actual_balance_amount
    FROM
      custom_order_details co
    LEFT JOIN
      advance_payments ap ON co.order_id = ap.order_id AND ap.is_custom_order = 1
    WHERE
      co.order_id = ?
    GROUP BY
      co.order_id
  `;

  con.query(sql, [orderId], (err, results) => {
    if (err) {
      console.error("Error fetching custom order:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Custom order not found" });
    }

    // Get order materials
    const materialsSql = `
      SELECT * FROM custom_order_materials
      WHERE order_id = ?
    `;

    con.query(materialsSql, [orderId], (materialsErr, materialsResults) => {
      if (materialsErr) {
        console.error("Error fetching order materials:", materialsErr);
        return res.status(500).json({ message: "Database error", error: materialsErr.message });
      }

      // Get order payments
      const paymentsSql = `
        SELECT * FROM custom_order_payments
        WHERE order_id = ?
        ORDER BY payment_date DESC
      `;

      con.query(paymentsSql, [orderId], (paymentsErr, paymentsResults) => {
        if (paymentsErr) {
          console.error("Error fetching order payments:", paymentsErr);
          return res.status(500).json({ message: "Database error", error: paymentsErr.message });
        }

        // Get order images
        const imagesSql = `
          SELECT * FROM custom_order_images
          WHERE order_id = ?
        `;

        con.query(imagesSql, [orderId], (imagesErr, imagesResults) => {
          if (imagesErr) {
            console.error("Error fetching order images:", imagesErr);
            return res.status(500).json({ message: "Database error", error: imagesErr.message });
          }

          // Process image paths
          const processedImages = (imagesResults || []).map(image => {
            // Make sure the image path is relative to the server root
            if (image.image_path && !image.image_path.startsWith('uploads/')) {
              image.image_path = 'uploads/custom_orders/' + image.image_path.split('/').pop();
            }
            return image;
          });

          // Combine all data
          const orderData = {
            ...results[0],
            // Use the actual advance amount from the query
            advance_amount: results[0].actual_advance_amount,
            balance_amount: results[0].actual_balance_amount,
            materials: materialsResults || [],
            payments: paymentsResults || [],
            imageDetails: processedImages || []
          };

          console.log(`Order ${orderId} - Advance amount: ${orderData.advance_amount}, Balance: ${orderData.balance_amount}`);

          res.json(orderData);
        });
      });
    });
  });
});

// Middleware to handle file upload errors
const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error('Multer error:', err);
    return res.status(400).json({ message: 'File upload error', error: err.message });
  } else if (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ message: 'Server error during upload', error: err.message });
  }
  next();
};

// Create a new custom order - without file upload middleware for now
router.post("/create", (req, res) => {
  try {
  console.log('POST /custom-orders/create - Creating new custom order');

  // Log the raw request
  console.log('Request headers:', req.headers);
  console.log('Request files:', req.files);
  console.log('Request body (raw):', req.body);

  // Get form data
  const {
    customer_name,
    customer_phone,
    customer_email,
    estimated_amount,
    advance_amount,
    estimated_completion_date,
    category_id,
    supplier_id,
    description,
    special_requirements,
    created_by,
    branch_id
  } = req.body;

  console.log('Extracted form data:');
  console.log('- customer_name:', customer_name);
  console.log('- estimated_amount:', estimated_amount);
  console.log('- advance_amount:', advance_amount);
  console.log('- category_id:', category_id, typeof category_id);
  console.log('- supplier_id:', supplier_id, typeof supplier_id);
  console.log('- created_by:', created_by);
  console.log('- branch_id:', branch_id);

  // Validate required fields
  if (!customer_name || !estimated_amount) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Generate order reference (CUST-YYYY-XXXX)
  const year = new Date().getFullYear();
  const referencePrefix = `CUST-${year}-`;

  // Get the next sequence number
  const sequenceQuery = `
    SELECT MAX(SUBSTRING_INDEX(order_reference, '-', -1)) as max_seq
    FROM custom_orders
    WHERE order_reference LIKE ?
  `;

  con.query(sequenceQuery, [`${referencePrefix}%`], (err, results) => {
    if (err) {
      console.error("Error generating order reference:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    let nextSeq = 1;
    if (results[0].max_seq) {
      nextSeq = parseInt(results[0].max_seq) + 1;
    }

    const order_reference = `${referencePrefix}${nextSeq.toString().padStart(4, '0')}`;

    // Determine payment status
    let payment_status = 'Not Paid';
    if (advance_amount && parseFloat(advance_amount) > 0) {
      payment_status = parseFloat(advance_amount) >= parseFloat(estimated_amount) ? 'Fully Paid' : 'Partially Paid';
    }

    // Start transaction
    con.beginTransaction((transErr) => {
      if (transErr) {
        console.error("Error starting transaction:", transErr);
        return res.status(500).json({ message: "Database error", error: transErr.message });
      }

      // Insert the custom order
      const insertSql = `
        INSERT INTO custom_orders (
          order_reference,
          customer_name,
          customer_phone,
          customer_email,
          estimated_completion_date,
          estimated_amount,
          advance_amount,
          order_status,
          payment_status,
          category_id,
          supplier_id,
          description,
          special_requirements,
          created_by,
          branch_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      // Convert numeric fields to their proper types
      const parsedCategoryId = category_id ? parseInt(category_id, 10) : null;
      const parsedSupplierId = supplier_id ? parseInt(supplier_id, 10) : null;
      const parsedCreatedBy = created_by ? parseInt(created_by, 10) : null;
      const parsedBranchId = branch_id ? parseInt(branch_id, 10) : null;

      const insertParams = [
        order_reference,
        customer_name,
        customer_phone || null,
        customer_email || null,
        estimated_completion_date || null,
        parseFloat(estimated_amount),
        parseFloat(advance_amount) || 0,
        'Pending',
        payment_status,
        parsedCategoryId,
        parsedSupplierId,
        description || '',
        special_requirements || '',
        parsedCreatedBy,
        parsedBranchId
      ];

      console.log('Parsed supplier_id:', parsedSupplierId, 'from original:', supplier_id);

      console.log('Insert parameters:', insertParams);

      con.query(insertSql, insertParams, (insertErr, insertResult) => {
        if (insertErr) {
          return con.rollback(() => {
            console.error("Error creating custom order:", insertErr);
            console.error("SQL query:", insertSql);
            console.error("Parameters:", insertParams);
            res.status(500).json({
              message: "Database error",
              error: insertErr.message,
              sqlState: insertErr.sqlState,
              sqlCode: insertErr.code,
              sqlNumber: insertErr.errno
            });
          });
        }

        const orderId = insertResult.insertId;

        // If advance payment was made, record it
        if (advance_amount && parseFloat(advance_amount) > 0) {
          const paymentSql = `
            INSERT INTO custom_order_payments (
              order_id,
              payment_amount,
              payment_method,
              notes
            ) VALUES (?, ?, ?, ?)
          `;

          con.query(paymentSql, [
            orderId,
            parseFloat(advance_amount),
            'Cash', // Default payment method
            'Initial advance payment'
          ], (paymentErr) => {
            if (paymentErr) {
              return con.rollback(() => {
                console.error("Error recording advance payment:", paymentErr);
                res.status(500).json({ message: "Database error", error: paymentErr.message });
              });
            }

            // Skip image processing for now
            console.log('Skipping image processing for testing');

            // Commit transaction directly
            con.commit((commitErr) => {
              if (commitErr) {
                return con.rollback(() => {
                  console.error("Error committing transaction:", commitErr);
                  res.status(500).json({ message: "Database error", error: commitErr.message });
                });
              }

              res.status(201).json({
                message: "Custom order created successfully",
                order_id: orderId,
                order_reference
              });
            });
          });
        } else {
          // No advance payment, skip image processing
          console.log('No advance payment, skipping image processing for testing');

          // Commit transaction directly
          con.commit((commitErr) => {
            if (commitErr) {
              return con.rollback(() => {
                console.error("Error committing transaction:", commitErr);
                res.status(500).json({ message: "Database error", error: commitErr.message });
              });
            }

            res.status(201).json({
              message: "Custom order created successfully",
              order_id: orderId,
              order_reference
            });
          });
        }
      });
    });
  });
  } catch (error) {
    console.error('Unexpected error in custom order creation:', error);
    res.status(500).json({
      message: 'Server error',
      error: error.message,
      stack: error.stack
    });
  }
});

// Update custom order status
router.put("/:id/status", (req, res) => {
  const orderId = req.params.id;
  const { order_status } = req.body;

  if (!order_status) {
    return res.status(400).json({ message: "Missing order status" });
  }

  const sql = `
    UPDATE custom_orders
    SET order_status = ?
    WHERE order_id = ?
  `;

  con.query(sql, [order_status, orderId], (err, result) => {
    if (err) {
      console.error("Error updating order status:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Custom order not found" });
    }

    res.json({
      message: "Order status updated successfully",
      order_id: orderId,
      order_status
    });
  });
});

// Add payment to custom order
router.post("/:id/payments", (req, res) => {
  const orderId = req.params.id;
  const { payment_amount, payment_method, payment_reference, notes } = req.body;

  if (!payment_amount || parseFloat(payment_amount) <= 0) {
    return res.status(400).json({ message: "Invalid payment amount" });
  }

  // Start transaction
  con.beginTransaction((transErr) => {
    if (transErr) {
      console.error("Error starting transaction:", transErr);
      return res.status(500).json({ message: "Database error", error: transErr.message });
    }

    // Insert payment
    const paymentSql = `
      INSERT INTO custom_order_payments (
        order_id,
        payment_amount,
        payment_method,
        payment_reference,
        notes
      ) VALUES (?, ?, ?, ?, ?)
    `;

    con.query(paymentSql, [
      orderId,
      parseFloat(payment_amount),
      payment_method || 'Cash',
      payment_reference || null,
      notes || null
    ], (paymentErr, paymentResult) => {
      if (paymentErr) {
        return con.rollback(() => {
          console.error("Error adding payment:", paymentErr);
          res.status(500).json({ message: "Database error", error: paymentErr.message });
        });
      }

      // Get current order details
      const orderSql = `
        SELECT estimated_amount, advance_amount
        FROM custom_orders
        WHERE order_id = ?
      `;

      con.query(orderSql, [orderId], (orderErr, orderResults) => {
        if (orderErr) {
          return con.rollback(() => {
            console.error("Error fetching order details:", orderErr);
            res.status(500).json({ message: "Database error", error: orderErr.message });
          });
        }

        if (orderResults.length === 0) {
          return con.rollback(() => {
            res.status(404).json({ message: "Custom order not found" });
          });
        }

        const order = orderResults[0];
        const newAdvanceAmount = parseFloat(order.advance_amount) + parseFloat(payment_amount);

        // Determine new payment status
        let newPaymentStatus = 'Partially Paid';
        if (newAdvanceAmount >= parseFloat(order.estimated_amount)) {
          newPaymentStatus = 'Fully Paid';
        }

        // Update order with new advance amount and payment status
        const updateSql = `
          UPDATE custom_orders
          SET advance_amount = ?,
              payment_status = ?
          WHERE order_id = ?
        `;

        con.query(updateSql, [newAdvanceAmount, newPaymentStatus, orderId], (updateErr, updateResult) => {
          if (updateErr) {
            return con.rollback(() => {
              console.error("Error updating order:", updateErr);
              res.status(500).json({ message: "Database error", error: updateErr.message });
            });
          }

          // Commit transaction
          con.commit((commitErr) => {
            if (commitErr) {
              return con.rollback(() => {
                console.error("Error committing transaction:", commitErr);
                res.status(500).json({ message: "Database error", error: commitErr.message });
              });
            }

            res.status(201).json({
              message: "Payment added successfully",
              payment_id: paymentResult.insertId,
              new_advance_amount: newAdvanceAmount,
              payment_status: newPaymentStatus
            });
          });
        });
      });
    });
  });
});

// Add materials to custom order
router.post("/:id/materials", (req, res) => {
  const orderId = req.params.id;
  const materials = req.body.materials;

  if (!materials || !Array.isArray(materials) || materials.length === 0) {
    return res.status(400).json({ message: "Invalid materials data" });
  }

  // Prepare batch insert values
  const materialValues = materials.map(material => [
    orderId,
    material.material_name,
    parseFloat(material.quantity),
    material.unit || 'g',
    material.cost_per_unit ? parseFloat(material.cost_per_unit) : null,
    material.total_cost ? parseFloat(material.total_cost) : null,
    material.supplier_id || null
  ]);

  const sql = `
    INSERT INTO custom_order_materials (
      order_id,
      material_name,
      quantity,
      unit,
      cost_per_unit,
      total_cost,
      supplier_id
    ) VALUES ?
  `;

  con.query(sql, [materialValues], (err, result) => {
    if (err) {
      console.error("Error adding materials:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.status(201).json({
      message: "Materials added successfully",
      materials_added: result.affectedRows
    });
  });
});

// Get categories with supplier data for graph
router.get("/categories/suppliers", (req, res) => {
  const sql = `
    SELECT
      c.category_id,
      c.category_name,
      s.supplier_id,
      s.supplier_name,
      COUNT(DISTINCT co.order_id) as order_count
    FROM
      categories c
    LEFT JOIN
      custom_orders co ON c.category_id = co.category_id
    LEFT JOIN
      custom_order_materials com ON co.order_id = com.order_id
    LEFT JOIN
      suppliers s ON com.supplier_id = s.supplier_id
    GROUP BY
      c.category_id, s.supplier_id
    ORDER BY
      c.category_name, s.supplier_name
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching category-supplier data:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // Process data for graph
    const categories = {};

    results.forEach(row => {
      if (!categories[row.category_name]) {
        categories[row.category_name] = {
          category_id: row.category_id,
          category_name: row.category_name,
          suppliers: []
        };
      }

      if (row.supplier_id) {
        categories[row.category_name].suppliers.push({
          supplier_id: row.supplier_id,
          supplier_name: row.supplier_name,
          order_count: row.order_count
        });
      }
    });

    res.json(Object.values(categories));
  });
});

export { router as customOrderRouter };
