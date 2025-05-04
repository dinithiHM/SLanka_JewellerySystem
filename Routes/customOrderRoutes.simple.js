import express from 'express';
import con from '../utils/db.js';
import { generateOrderReference } from '../utils/referenceGenerator.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine which email service to use (real or mock)
let emailService;
try {
  // Force use of real email service since we know nodemailer is installed
  console.log("Using real email service");
  emailService = await import('../utils/emailService.js');
} catch (e) {
  console.error("Error importing email service:", e);

  // Fallback to mock service if there's an error
  try {
    console.log("Falling back to mock email service");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const mockServicePath = path.join(__dirname, '..', 'utils', 'mockEmailService.js');

    if (!fs.existsSync(mockServicePath)) {
      console.log("Mock email service not found, please create it manually");
    }

    emailService = await import('../utils/mockEmailService.js');
  } catch (mockError) {
    console.error("Error importing mock email service:", mockError);
    // If both fail, we'll get an error when trying to use sendCustomOrderPaymentReminder
  }
}

const { sendCustomOrderPaymentReminder } = emailService;

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
        // First, insert into custom_order_payments
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
          'Initial advance payment'
        ];

        con.query(paymentSql, paymentParams, (paymentErr) => {
          if (paymentErr) {
            return con.rollback(() => {
              console.error("Error recording payment:", paymentErr);
              res.status(500).json({ message: "Database error", error: paymentErr.message });
            });
          }

          // Now, also insert into advance_payments table
          // Generate a reference number for the advance payment
          const year = new Date().getFullYear();
          const referencePrefix = `ADV-${year}-`;

          // Find the next sequence number
          const sequenceQuery = `
            SELECT MAX(CAST(SUBSTRING_INDEX(payment_reference, '-', -1) AS UNSIGNED)) as max_seq
            FROM advance_payments
            WHERE payment_reference LIKE ?
          `;

          con.query(sequenceQuery, [`${referencePrefix}%`], (seqErr, seqResults) => {
            if (seqErr) {
              return con.rollback(() => {
                console.error("Error generating payment reference:", seqErr);
                res.status(500).json({ message: "Database error", error: seqErr.message });
              });
            }

            let nextSeq = 1;
            if (seqResults[0].max_seq) {
              nextSeq = parseInt(seqResults[0].max_seq) + 1;
            }

            const payment_reference = `${referencePrefix}${nextSeq.toString().padStart(4, '0')}`;

            // Calculate balance amount
            const balance_amount = parseFloat(estimated_amount) - parseFloat(advance_amount);
            const payment_status = balance_amount <= 0 ? 'Completed' : 'Partially Paid';

            // Insert into advance_payments table
            const advancePaymentSql = `
              INSERT INTO advance_payments (
                payment_reference,
                customer_name,
                payment_date,
                total_amount,
                advance_amount,
                balance_amount,
                payment_status,
                payment_method,
                notes,
                created_by,
                branch_id,
                is_custom_order,
                order_id
              ) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            con.query(advancePaymentSql, [
              payment_reference,
              customer_name,
              parseFloat(estimated_amount),
              parseFloat(advance_amount),
              balance_amount,
              payment_status,
              'Cash', // Default payment method
              'Initial advance payment for custom order',
              parsedCreatedBy,
              parsedBranchId,
              1, // is_custom_order = true
              orderId
            ], (advPayErr) => {
              if (advPayErr) {
                return con.rollback(() => {
                  console.error("Error creating advance payment:", advPayErr);
                  res.status(500).json({ message: "Database error", error: advPayErr.message });
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

// Get all custom orders with payment information and branch-based filtering
router.get("/", (req, res) => {
  console.log('GET /custom-orders - Fetching custom orders');

  // Get branch_id and role from query parameters
  const branchId = req.query.branch_id;
  let userRole = req.query.role;

  // Normalize the role to lowercase for consistent comparison
  userRole = userRole ? userRole.toLowerCase() : '';

  // Log the exact role for debugging
  console.log(`DEBUG: Role after lowercase: '${userRole}'`);

  // Handle different role formats
  if (userRole.includes('store') && userRole.includes('manager')) {
    userRole = 'storemanager';
  } else if (userRole.includes('sales') && userRole.includes('associate')) {
    userRole = 'salesassociate';
  } else if (userRole.includes('admin')) {
    userRole = 'admin';
  } else if (userRole.includes('cashier')) {
    userRole = 'cashier';
  }

  console.log(`Normalized role: '${userRole}', Branch ID: ${branchId || 'not provided'}`);

  // Base SQL query
  let sql = `
    SELECT co.*,
      (SELECT COUNT(*) FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1) as payment_count,
      (SELECT SUM(advance_amount) FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1) as total_paid,
      (SELECT MIN(balance_amount) FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1) as min_balance,
      (SELECT payment_status FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1 ORDER BY payment_id DESC LIMIT 1) as latest_payment_status,
      (SELECT SUM(payment_amount) FROM custom_order_payments WHERE order_id = co.order_id) as total_custom_payments,
      CASE
        WHEN (SELECT MIN(balance_amount) FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1) <= 0 THEN 'Fully Paid'
        WHEN (SELECT SUM(advance_amount) FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1) >= co.estimated_amount THEN 'Fully Paid'
        WHEN (SELECT SUM(payment_amount) FROM custom_order_payments WHERE order_id = co.order_id) >= co.estimated_amount THEN 'Fully Paid'
        WHEN (SELECT SUM(payment_amount) FROM custom_order_payments WHERE order_id = co.order_id) > 0 THEN 'Partially Paid'
        ELSE 'Not Paid'
      END as current_payment_status,
      (SELECT advance_amount FROM advance_payments WHERE order_id = co.order_id AND is_custom_order = 1 ORDER BY payment_id DESC LIMIT 1) as latest_advance_amount,
      b.branch_name
    FROM custom_order_details co
    LEFT JOIN branches b ON co.branch_id = b.branch_id
  `;

  // Add WHERE clause for branch filtering based on filter parameter
  const queryParams = [];
  const filterByBranch = req.query.filter_branch === 'true';

  if (userRole === 'admin' || userRole === '') {
    // Admin sees all orders, but can filter by branch if requested
    console.log('Admin role detected - showing all branches');
    if (filterByBranch && branchId) {
      sql += ` WHERE co.branch_id = ?`;
      queryParams.push(branchId);
      console.log(`Admin filtering by branch_id: ${branchId}`);
    }
  } else {
    // Non-admin users can see all orders, but default filter is their branch
    if (filterByBranch && branchId) {
      sql += ` WHERE co.branch_id = ?`;
      queryParams.push(branchId);
      console.log(`Non-admin role filtering by branch_id: ${branchId}`);
    } else {
      console.log('Non-admin role showing all branches');
    }
  }

  // Add ORDER BY clause
  sql += ` ORDER BY co.order_date DESC`;

  console.log('Executing SQL:', sql);
  console.log('With parameters:', queryParams);

  con.query(sql, queryParams, (err, results) => {
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

// Get custom order by ID with branch-based access control
router.get("/:id", (req, res) => {
  const orderId = req.params.id;
  const branchId = req.query.branch_id;
  let userRole = req.query.role;

  // Normalize the role to lowercase for consistent comparison
  userRole = userRole ? userRole.toLowerCase() : '';

  // Log the exact role for debugging
  console.log(`DEBUG: Role after lowercase: '${userRole}'`);

  // Handle different role formats
  if (userRole.includes('store') && userRole.includes('manager')) {
    userRole = 'storemanager';
  } else if (userRole.includes('sales') && userRole.includes('associate')) {
    userRole = 'salesassociate';
  } else if (userRole.includes('admin')) {
    userRole = 'admin';
  } else if (userRole.includes('cashier')) {
    userRole = 'cashier';
  }

  console.log(`Fetching custom order ${orderId} for role: ${userRole}, branch: ${branchId || 'not provided'}`);

  // Prepare SQL query - all users can see any order details
  const orderSql = `
    SELECT * FROM custom_order_details
    WHERE order_id = ?
  `;
  const queryParams = [orderId];

  console.log(`Fetching order details for order ID: ${orderId}`);

  // We'll check if the order is from the user's branch after fetching it

  con.query(orderSql, queryParams, (err, results) => {
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

        // Check if order is from a different branch than the user's branch
        const orderBranchId = results[0].branch_id;
        const isFromOtherBranch = userRole !== 'admin' && branchId && orderBranchId !== parseInt(branchId);

        if (isFromOtherBranch) {
          console.log(`Order ${orderId} is from branch ${orderBranchId}, user is from branch ${branchId}`);
        }

        // Combine all data
        const orderData = {
          ...results[0],
          materials: materialsResults || [],
          payments: paymentsResults || [],
          imageDetails: processedImages || [],
          isFromOtherBranch: isFromOtherBranch
        };

        res.json(orderData);
      })
      .catch(err => {
        console.error("Error fetching related data:", err);
        res.status(500).json({ message: "Database error", error: err.message });
      });
  });
});

// Send payment reminder email for a custom order
router.post("/:id/send-reminder", async (req, res) => {
  const orderId = req.params.id;

  console.log(`POST /custom-orders/${orderId}/send-reminder - Sending payment reminder email`);

  // Get the order details
  const orderSql = `
    SELECT * FROM custom_order_details
    WHERE order_id = ?
  `;

  con.query(orderSql, [orderId], async (err, results) => {
    if (err) {
      console.error("Error fetching custom order:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Custom order not found"
      });
    }

    const order = results[0];
    console.log("Order details:", order);

    // Check if customer email exists
    if (!order.customer_email) {
      return res.status(400).json({
        success: false,
        message: "Customer email not available for this order"
      });
    }

    try {
      console.log(`Attempting to send email to ${order.customer_email}`);

      // We're already handling nodemailer availability at the top of the file
      // The code will use either the real email service or the mock email service

      // Send the reminder email
      const emailResult = await sendCustomOrderPaymentReminder(order, order.customer_email);
      console.log("Email sending result:", emailResult);

      if (emailResult.success) {
        // Log the email sent in the database
        try {
          const logSql = `
            INSERT INTO email_logs (
              order_id,
              email_type,
              recipient_email,
              sent_at,
              status,
              message_id,
              error_message
            ) VALUES (?, ?, ?, NOW(), ?, ?, ?)
          `;

          // Check if this is a mock email
          const isMockEmail = emailResult.mockEmail === true;
          const status = isMockEmail ? 'mock_sent' : 'sent';
          const notes = isMockEmail ? 'Mock email (nodemailer not installed)' : null;

          con.query(logSql, [
            orderId,
            'payment_reminder',
            order.customer_email,
            status,
            emailResult.messageId || null,
            notes
          ], (logErr) => {
            if (logErr) {
              console.error("Error logging email:", logErr);
              // Continue anyway since the email was sent
            } else {
              console.log(`Email log saved to database (${isMockEmail ? 'mock' : 'real'} email)`);
            }
          });
        } catch (logError) {
          console.error("Error with email logging:", logError);
          // Continue anyway since the email was sent
        }

        // Check if this is a mock email
        const isMockEmail = emailResult.mockEmail === true;
        const message = isMockEmail
          ? "Mock payment reminder email generated successfully (nodemailer not installed)"
          : "Real payment reminder email sent successfully to " + order.customer_email;

        console.log("Email sending result:", {
          success: true,
          isMock: isMockEmail,
          message: message,
          messageId: emailResult.messageId
        });

        return res.status(200).json({
          success: true,
          message: message,
          messageId: emailResult.messageId,
          isMockEmail: isMockEmail
        });
      } else {
        console.error("Email sending failed:", emailResult.error);
        return res.status(500).json({
          success: false,
          message: "Failed to send payment reminder email",
          error: emailResult.error
        });
      }
    } catch (error) {
      console.error("Error sending payment reminder:", error);
      return res.status(500).json({
        success: false,
        message: "Error sending payment reminder",
        error: error.message
      });
    }
  });
});

// Add payment to custom order
router.post("/:id/payments", (req, res) => {
  const orderId = req.params.id;
  const { payment_amount, payment_method, notes } = req.body;

  if (!payment_amount || parseFloat(payment_amount) <= 0) {
    return res.status(400).json({ message: "Invalid payment amount" });
  }

  // Start transaction
  con.beginTransaction((transErr) => {
    if (transErr) {
      console.error("Error starting transaction:", transErr);
      return res.status(500).json({ message: "Database error", error: transErr.message });
    }

    // Get current order details
    const orderSql = `
      SELECT order_id, customer_name, estimated_amount, advance_amount, created_by, branch_id
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

      // Insert payment into custom_order_payments
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
        parseFloat(payment_amount),
        payment_method || 'Cash',
        notes || 'Additional payment'
      ], (paymentErr, paymentResult) => {
        if (paymentErr) {
          return con.rollback(() => {
            console.error("Error adding payment:", paymentErr);
            res.status(500).json({ message: "Database error", error: paymentErr.message });
          });
        }

        // Now, also insert into advance_payments table
        // Generate a reference number for the advance payment
        const year = new Date().getFullYear();
        const referencePrefix = `ADV-${year}-`;

        // Find the next sequence number
        const sequenceQuery = `
          SELECT MAX(CAST(SUBSTRING_INDEX(payment_reference, '-', -1) AS UNSIGNED)) as max_seq
          FROM advance_payments
          WHERE payment_reference LIKE ?
        `;

        con.query(sequenceQuery, [`${referencePrefix}%`], (seqErr, seqResults) => {
          if (seqErr) {
            return con.rollback(() => {
              console.error("Error generating payment reference:", seqErr);
              res.status(500).json({ message: "Database error", error: seqErr.message });
            });
          }

          let nextSeq = 1;
          if (seqResults[0].max_seq) {
            nextSeq = parseInt(seqResults[0].max_seq) + 1;
          }

          const payment_reference = `${referencePrefix}${nextSeq.toString().padStart(4, '0')}`;

          // Calculate total payments for this order
          const getTotalPaymentsSql = `
            SELECT SUM(payment_amount) as total_payments
            FROM custom_order_payments
            WHERE order_id = ?
          `;

          con.query(getTotalPaymentsSql, [orderId], (totalErr, totalResults) => {
            if (totalErr) {
              return con.rollback(() => {
                console.error("Error calculating total payments:", totalErr);
                res.status(500).json({ message: "Database error", error: totalErr.message });
              });
            }

            const totalPayments = totalResults[0].total_payments || 0;
            const balance_amount = parseFloat(order.estimated_amount) - parseFloat(totalPayments);
            const payment_status = balance_amount <= 0 ? 'Completed' : 'Partially Paid';

            // Insert into advance_payments table
            const advancePaymentSql = `
              INSERT INTO advance_payments (
                payment_reference,
                customer_name,
                payment_date,
                total_amount,
                advance_amount,
                balance_amount,
                payment_status,
                payment_method,
                notes,
                created_by,
                branch_id,
                is_custom_order,
                order_id
              ) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            con.query(advancePaymentSql, [
              payment_reference,
              order.customer_name,
              parseFloat(order.estimated_amount),
              parseFloat(payment_amount),
              balance_amount,
              payment_status,
              payment_method || 'Cash',
              notes || 'Additional payment for custom order',
              order.created_by,
              order.branch_id,
              1, // is_custom_order = true
              orderId
            ], (advPayErr) => {
              if (advPayErr) {
                return con.rollback(() => {
                  console.error("Error creating advance payment:", advPayErr);
                  res.status(500).json({ message: "Database error", error: advPayErr.message });
                });
              }

              // Update the custom order with the new advance amount and payment status
              const updateOrderSql = `
                UPDATE custom_orders
                SET advance_amount = ?,
                    payment_status = ?
                WHERE order_id = ?
              `;

              con.query(updateOrderSql, [totalPayments, payment_status, orderId], (updateErr) => {
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
                    new_advance_amount: totalPayments,
                    payment_status: payment_status
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

export { router as customOrderRouter };