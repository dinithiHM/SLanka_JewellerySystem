import express from 'express';
import con from '../utils/db.js';
import { generateOrderReference } from '../utils/referenceGenerator.js';

const router = express.Router();

// Create a new custom order without file upload
router.post("/create", (req, res) => {
  console.log('POST /custom-orders/create - Creating new custom order');
  console.log('Request body:', req.body);

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

  // Validate required fields
  if (!customer_name || !estimated_amount) {
    return res.status(400).json({ message: "Customer name and estimated amount are required" });
  }

  // Generate order reference
  const order_reference = generateOrderReference('CUST');
  console.log('Generated order reference:', order_reference);

  // Determine payment status
  const payment_status = advance_amount > 0
    ? (parseFloat(advance_amount) >= parseFloat(estimated_amount) ? 'Fully Paid' : 'Partially Paid')
    : 'Not Paid';

  console.log('Payment status:', payment_status);

  // Start transaction
  con.beginTransaction(err => {
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // Insert order
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
      console.log('Order created with ID:', orderId);

      // If advance payment was made, record it
      if (parseFloat(advance_amount) > 0) {
        const paymentSql = `
          INSERT INTO custom_order_payments (
            order_id,
            payment_amount,
            payment_method,
            notes
          ) VALUES (?, ?, ?, ?)
        `;

        const paymentParams = [
          orderId,
          parseFloat(advance_amount),
          'Cash', // Default payment method
          'Advance payment'
        ];

        con.query(paymentSql, paymentParams, (paymentErr) => {
          if (paymentErr) {
            return con.rollback(() => {
              console.error("Error recording payment:", paymentErr);
              res.status(500).json({ message: "Database error", error: paymentErr.message });
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
              message: "Custom order created successfully",
              order_id: orderId,
              order_reference
            });
          });
        });
      } else {
        // No advance payment, commit transaction directly
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

// Get all custom orders with payment information
router.get("/", (_req, res) => {
  const sql = `
    SELECT co.*,
      (SELECT COUNT(*) FROM advance_payments WHERE order_id = co.order_id) as payment_count,
      (SELECT SUM(advance_amount) FROM advance_payments WHERE order_id = co.order_id) as total_paid,
      (SELECT MIN(balance_amount) FROM advance_payments WHERE order_id = co.order_id) as min_balance,
      (SELECT payment_status FROM advance_payments WHERE order_id = co.order_id ORDER BY payment_id DESC LIMIT 1) as latest_payment_status,
      CASE
        WHEN (SELECT MIN(balance_amount) FROM advance_payments WHERE order_id = co.order_id) <= 0 THEN 'Fully Paid'
        WHEN (SELECT SUM(advance_amount) FROM advance_payments WHERE order_id = co.order_id) >= co.estimated_amount THEN 'Fully Paid'
        WHEN (SELECT SUM(advance_amount) FROM advance_payments WHERE order_id = co.order_id) > 0 THEN 'Partially Paid'
        ELSE 'Not Paid'
      END as current_payment_status,
      (SELECT advance_amount FROM advance_payments WHERE order_id = co.order_id ORDER BY payment_id DESC LIMIT 1) as latest_advance_amount
    FROM custom_order_details co
    ORDER BY co.order_date DESC
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching custom orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // Update the payment_status field with the current status from payments
    const updatedResults = results.map(order => ({
      ...order,
      payment_status: order.current_payment_status || order.payment_status
    }));

    // Update the database with the current payment status if it's different
    const updatePromises = results.map(order => {
      return new Promise((resolve) => {
        if (order.current_payment_status && order.current_payment_status !== order.payment_status) {
          console.log(`Updating payment status for order ${order.order_id} from ${order.payment_status} to ${order.current_payment_status}`);

          // Update both payment_status and advance_amount if needed
          const updateSql = `UPDATE custom_orders SET payment_status = ?, advance_amount = ? WHERE order_id = ?`;
          const advanceAmount = order.total_paid || order.latest_advance_amount || order.advance_amount || 0;

          con.query(updateSql, [order.current_payment_status, advanceAmount, order.order_id], (updateErr) => {
            if (updateErr) {
              console.error(`Error updating payment status for order ${order.order_id}:`, updateErr);
            } else {
              console.log(`Successfully updated order ${order.order_id} payment status to ${order.current_payment_status} and advance amount to ${advanceAmount}`);
            }
            resolve();
          });
        } else {
          resolve();
        }
      });
    });

    // Wait for all updates to complete
    Promise.all(updatePromises).then(() => {
      res.json(updatedResults);
    }).catch(error => {
      console.error('Error updating payment statuses:', error);
      res.json(updatedResults);
    });
  });
});

// Get custom order by ID
router.get("/:id", (req, res) => {
  const orderId = req.params.id;

  // Get order details
  const orderSql = `
    SELECT * FROM custom_order_details
    WHERE order_id = ?
  `;

  con.query(orderSql, [orderId], (err, results) => {
    if (err) {
      console.error("Error fetching custom order:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Custom order not found" });
    }

    // Get materials
    const materialsSql = `
      SELECT * FROM custom_order_materials
      WHERE order_id = ?
    `;

    // Get payments
    const paymentsSql = `
      SELECT * FROM custom_order_payments
      WHERE order_id = ?
    `;

    // Get images
    const imagesSql = `
      SELECT * FROM custom_order_images
      WHERE order_id = ?
    `;

    // Execute all queries in parallel
    Promise.all([
      new Promise((resolve, reject) => {
        con.query(materialsSql, [orderId], (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      }),
      new Promise((resolve, reject) => {
        con.query(paymentsSql, [orderId], (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      }),
      new Promise((resolve, reject) => {
        con.query(imagesSql, [orderId], (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      })
    ])
      .then(([materialsResults, paymentsResults, imagesResults]) => {
        // Process image paths
        const processedImages = (imagesResults || []).map(image => {
          // Make sure the image path is relative to the server root
          if (image.image_path) {
            // Handle different path formats
            if (!image.image_path.startsWith('uploads/')) {
              // If it's a full path, extract just the filename
              if (image.image_path.includes('/')) {
                image.image_path = 'uploads/custom_orders/' + image.image_path.split('/').pop();
              } else {
                // If it's just a filename
                image.image_path = 'uploads/custom_orders/' + image.image_path;
              }
            }
            console.log('Processed image path:', image.image_path);
          }
          return image;
        });

        // Also process the images string in the main result
        if (results[0].images) {
          const imagesList = results[0].images.split(',');
          const processedImagesList = imagesList.map(imagePath => {
            if (imagePath && !imagePath.startsWith('uploads/')) {
              if (imagePath.includes('/')) {
                return 'uploads/custom_orders/' + imagePath.split('/').pop();
              } else {
                return 'uploads/custom_orders/' + imagePath;
              }
            }
            return imagePath;
          });
          results[0].images = processedImagesList.join(',');
          console.log('Processed images string:', results[0].images);
        }

        // Combine all data
        const orderData = {
          ...results[0],
          materials: materialsResults || [],
          payments: paymentsResults || [],
          imageDetails: processedImages || []
        };

        res.json(orderData);
      })
      .catch(err => {
        console.error("Error fetching related data:", err);
        res.status(500).json({ message: "Database error", error: err.message });
      });
  });
});

export const customOrderRouter = router;
