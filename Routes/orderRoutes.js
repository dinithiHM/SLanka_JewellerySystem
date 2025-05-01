import express from "express";
import con from "../utils/db.js"; // Database connection
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Helper function to save base64 image
const saveBase64Image = (base64String, orderId) => {
  // Skip if no image data
  if (!base64String) return null;

  // Extract image data and type
  const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  if (!matches || matches.length !== 3) {
    console.error('Invalid base64 string format');
    return null;
  }

  // Get image type and data
  const imageType = matches[1];
  const imageData = matches[2];
  const extension = imageType.split('/')[1];
  const fileName = `order_${orderId}_${Date.now()}.${extension}`;

  // Create uploads directory if it doesn't exist
  const uploadsDir = path.join(__dirname, '..', 'Public', 'uploads', 'images');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Save the file
  const filePath = path.join(uploadsDir, fileName);
  fs.writeFileSync(filePath, imageData, 'base64');

  // Return just the relative path to the file (without domain)
  return `images/${fileName}`;
};

// Get all orders with branch filtering
router.get("/", (req, res) => {
  console.log('GET /orders - Fetching orders');

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

  console.log(`DEBUG: Normalized role: '${userRole}'`);

  console.log(`Request params - Branch ID: ${branchId}, User Role: ${userRole}`);
  console.log('Full query parameters:', req.query);

  // EMERGENCY FIX: If the role is 'store manager' (with space), treat it as storemanager
  const isStoreManager = userRole.includes('store') || userRole.includes('manager');
  console.log(`DEBUG: isStoreManager = ${isStoreManager}`);

  // Check if branch_id column exists in orders table
  con.query("SHOW COLUMNS FROM orders LIKE 'branch_id'", (columnErr, columnResults) => {
    if (columnErr) {
      console.error("Error checking for branch_id column:", columnErr);
      return res.status(500).json({ message: "Database error", error: columnErr.message });
    }

    const branchColumnExists = columnResults.length > 0;
    console.log(`Branch column exists: ${branchColumnExists}`);

    let sql;
    let queryParams = [];

    if (branchColumnExists) {
      // Different queries based on user role
      if (userRole === 'admin' || userRole.includes('admin')) {
        // Admin sees all orders with branch info
        console.log('Fetching all orders with branch info (admin view)');
        sql = `
          SELECT o.*, b.branch_name
          FROM orders o
          LEFT JOIN branches b ON o.branch_id = b.branch_id
        `;
        console.log('SQL for admin:', sql);
      } else if (userRole === 'storemanager' || isStoreManager || userRole === 'salesassociate' || userRole === 'cashier') {
        // Non-admin users (store manager, sales associate, cashier) only see orders from their branch
        console.log(`Fetching orders for branch ${branchId} (${userRole} view)`);
        sql = `
          SELECT o.*, b.branch_name
          FROM orders o
          LEFT JOIN branches b ON o.branch_id = b.branch_id
          WHERE o.branch_id = ?
        `;
        queryParams = [branchId || 0]; // Use 0 as fallback to prevent seeing all orders
        console.log('SQL for non-admin:', sql);
        console.log('Query params:', queryParams);
      } else {
        // Unknown role - return empty result
        console.log(`Unknown role: ${userRole}, returning empty result`);
        sql = `SELECT o.*, b.branch_name FROM orders o LEFT JOIN branches b ON o.branch_id = b.branch_id WHERE 1=0`;
        console.log('SQL for unknown role:', sql);
      }
    } else {
      // If branch_id column doesn't exist yet, still apply role-based filtering
      if (userRole === 'admin' || userRole.includes('admin')) {
        console.log('Branch column not found, showing all orders for admin');
        sql = "SELECT * FROM orders";
      } else if (userRole === 'storemanager' || isStoreManager || userRole === 'salesassociate' || userRole === 'cashier') {
        console.log('Branch column not found, but restricting non-admin users');
        // Return empty result for non-admin users if branch filtering is not possible
        sql = "SELECT * FROM orders WHERE 1=0";
      } else {
        console.log(`Unknown role: ${userRole}, returning empty result`);
        sql = "SELECT * FROM orders WHERE 1=0";
      }
    }

    console.log('Executing query with params:', queryParams);
    con.query(sql, queryParams, (err, results) => {
      if (err) {
        console.error("Error fetching orders:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }

      console.log(`Found ${results.length} orders`);
      if (results.length > 0) {
        console.log('Sample order:', results[0]);
      }

      // Process image URLs for all orders
      const processedResults = (results || []).map(order => {
        if (order.design_image) {
          // Assuming your server is running on the same port as your API
          const baseUrl = `${req.protocol}://${req.get('host')}`;

          // Make sure we don't duplicate the /uploads/ part
          const imagePath = order.design_image.startsWith('uploads/')
            ? order.design_image
            : `uploads/${order.design_image}`;

          order.design_image_url = `${baseUrl}/${imagePath}`;
        }
        return order;
      });

      res.json(processedResults);
    });
  });
});

// Get order by ID with branch-based access control
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

  console.log(`DEBUG: Normalized role: '${userRole}'`);

  // EMERGENCY FIX: If the role is 'store manager' (with space), treat it as storemanager
  const isStoreManager = userRole.includes('store') || userRole.includes('manager');
  console.log(`DEBUG: isStoreManager = ${isStoreManager}`);

  console.log(`GET /orders/${orderId} - Fetching order by ID`);
  console.log(`Request params - Branch ID: ${branchId}, User Role: ${userRole}`);

  // Check if branch_id column exists in orders table
  con.query("SHOW COLUMNS FROM orders LIKE 'branch_id'", (columnErr, columnResults) => {
    if (columnErr) {
      console.error("Error checking for branch_id column:", columnErr);
      return res.status(500).json({ message: "Database error", error: columnErr.message });
    }

    const branchColumnExists = columnResults.length > 0;
    console.log(`Branch column exists: ${branchColumnExists}`);

    let sql;
    let queryParams = [orderId];

    if (branchColumnExists) {
      if (userRole === 'admin' || userRole.includes('admin')) {
        // Admin can see any order with branch info
        sql = `
          SELECT o.*, b.branch_name
          FROM orders o
          LEFT JOIN branches b ON o.branch_id = b.branch_id
          WHERE o.order_id = ?
        `;
      } else if (userRole === 'storemanager' || isStoreManager || userRole === 'salesassociate' || userRole === 'cashier') {
        // Non-admin users can only see orders from their branch
        sql = `
          SELECT o.*, b.branch_name
          FROM orders o
          LEFT JOIN branches b ON o.branch_id = b.branch_id
          WHERE o.order_id = ? AND o.branch_id = ?
        `;
        queryParams.push(branchId || 0);
      } else {
        // Unknown role - return empty result
        return res.status(403).json({ message: "Access denied: Unknown user role" });
      }
    } else {
      // If branch_id column doesn't exist, use original query for admin only
      if (userRole === 'admin' || userRole.includes('admin')) {
        sql = "SELECT * FROM orders WHERE order_id = ?";
      } else if (userRole === 'storemanager' || isStoreManager || userRole === 'salesassociate' || userRole === 'cashier') {
        // For non-admin, we can't verify branch access, so deny access
        return res.status(403).json({ message: "Access denied: Branch-based filtering not available" });
      } else {
        // Unknown role
        return res.status(403).json({ message: "Access denied: Unknown user role" });
      }
    }

    con.query(sql, queryParams, (err, results) => {
      if (err) {
        console.error("Error fetching order:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Order not found or access denied" });
      }

      const order = results[0];

      // If there's an image path, convert it to a full URL
      if (order.design_image) {
        // Assuming your server is running on the same port as your API
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        // Make sure we don't duplicate the /uploads/ part
        const imagePath = order.design_image.startsWith('uploads/')
          ? order.design_image
          : `uploads/${order.design_image}`;

        order.design_image_url = `${baseUrl}/${imagePath}`;
        console.log(`Image URL: ${order.design_image_url}`);
      }

      res.json(order);
    });
  });
});

// Create new order
router.post("/create", (req, res) => {
  const {
    category,
    supplier,
    quantity,
    offerGold,
    selectedKarats,
    karatValues,
    image,
    branch_id // Add branch_id to the request body
  } = req.body;

  console.log('POST /orders/create - Creating new order');
  console.log(`Order details - Category: ${category}, Supplier: ${supplier}, Branch ID: ${branch_id}`);

  // Basic validation
  if (!category || !supplier || !quantity) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Convert arrays and objects to JSON strings for storage
  const karatsJson = JSON.stringify(selectedKarats || []);
  const karatValuesJson = JSON.stringify(karatValues || {});

  // Check if required columns exist in orders table
  con.query("SHOW COLUMNS FROM orders LIKE 'branch_id'", (columnErr, columnResults) => {
    if (columnErr) {
      console.error("Error checking for branch_id column:", columnErr);
      return res.status(500).json({ message: "Database error", error: columnErr.message });
    }

    const branchColumnExists = columnResults.length > 0;
    console.log(`Branch column exists: ${branchColumnExists}`);

    // Check if price calculation columns exist
    con.query("SHOW COLUMNS FROM orders LIKE 'estimated_price'", (priceColumnErr, priceColumnResults) => {
      if (priceColumnErr) {
        console.error("Error checking for price columns:", priceColumnErr);
        return res.status(500).json({ message: "Database error", error: priceColumnErr.message });
      }

      const priceColumnsExist = priceColumnResults.length > 0;
      console.log(`Price columns exist: ${priceColumnsExist}`);

      // If price columns don't exist, add them
      if (!priceColumnsExist) {
        const alterTableSql = `
          ALTER TABLE orders
          ADD COLUMN gold_price_per_gram DECIMAL(10,2) NULL,
          ADD COLUMN weight_in_grams DECIMAL(10,2) NULL,
          ADD COLUMN making_charges DECIMAL(10,2) NULL,
          ADD COLUMN additional_materials_charges DECIMAL(10,2) NULL,
          ADD COLUMN base_estimated_price DECIMAL(10,2) NULL,
          ADD COLUMN estimated_price DECIMAL(10,2) NULL,
          ADD COLUMN total_amount DECIMAL(10,2) NULL
        `;

        con.query(alterTableSql, (alterErr) => {
          if (alterErr) {
            console.error("Error adding price columns to orders table:", alterErr);
            // Continue with order creation even if column addition fails
            console.log("Continuing with order creation without price columns");
          } else {
            console.log("Added price columns to orders table");
          }
        });
      } else {
        // Check if additional materials charges column exists
        con.query("SHOW COLUMNS FROM orders LIKE 'additional_materials_charges'", (additionalColumnErr, additionalColumnResults) => {
          if (additionalColumnErr) {
            console.error("Error checking for additional materials charges column:", additionalColumnErr);
          } else if (additionalColumnResults.length === 0) {
            // Add the additional columns if they don't exist
            const alterTableSql = `
              ALTER TABLE orders
              ADD COLUMN additional_materials_charges DECIMAL(10,2) NULL,
              ADD COLUMN base_estimated_price DECIMAL(10,2) NULL
            `;

            con.query(alterTableSql, (alterErr) => {
              if (alterErr) {
                console.error("Error adding additional materials charges column:", alterErr);
              } else {
                console.log("Added additional materials charges column to orders table");
              }
            });
          }
        });

        // Check if selectedKarat and goldPurity columns exist
        con.query("SHOW COLUMNS FROM orders LIKE 'selectedKarat'", (karatColumnErr, karatColumnResults) => {
          if (karatColumnErr) {
            console.error("Error checking for selectedKarat column:", karatColumnErr);
          } else if (karatColumnResults.length === 0) {
            // Add the karat and purity columns if they don't exist
            const alterTableSql = `
              ALTER TABLE orders
              ADD COLUMN selectedKarat VARCHAR(10) NULL,
              ADD COLUMN goldPurity DECIMAL(5,4) NULL
            `;

            con.query(alterTableSql, (alterErr) => {
              if (alterErr) {
                console.error("Error adding karat and purity columns:", alterErr);
              } else {
                console.log("Added selectedKarat and goldPurity columns to orders table");
              }
            });
          }
        });
      }

      // First insert the order without the image
      let sql;
      let values;

      // Extract price calculation fields from request
      const goldPricePerGram = req.body.goldPricePerGram || null;
      const weightInGrams = req.body.weightInGrams || null;
      const makingCharges = req.body.makingCharges || null;
      const additionalMaterialsCharges = req.body.additionalMaterialsCharges || null;
      const baseEstimatedPrice = req.body.baseEstimatedPrice || null; // Base gold price (gold * weight)
      const estimatedPrice = req.body.estimatedPrice || null; // Total estimate with all charges
      const totalAmount = req.body.totalAmount || null;

      // Extract gold karat and purity information
      const selectedKarat = req.body.selectedKarat_db || req.body.selectedKarat || null;
      const goldPurity = req.body.goldPurity_db || req.body.goldPurity || null;

      // Extract payment fields from request
      const advancePaymentAmount = req.body.advance_payment_amount || null;
      const totalPaymentAmount = req.body.total_payment_amount || totalAmount;
      const paymentStatus = req.body.payment_status || 'Pending';

      if (priceColumnsExist) {
        // Include price calculation fields if the columns exist
        if (branchColumnExists && branch_id) {
          // Include branch_id and price fields
          sql = `
            INSERT INTO orders (
              category,
              supplier_id,
              quantity,
              offer_gold,
              selected_karats,
              karat_values,
              design_image,
              status,
              branch_id,
              gold_price_per_gram,
              weight_in_grams,
              making_charges,
              additional_materials_charges,
              base_estimated_price,
              estimated_price,
              total_amount,
              advance_payment_amount,
              total_payment_amount,
              payment_status,
              selectedKarat,
              goldPurity,
              created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
          `;

          values = [
            category,
            supplier,
            quantity,
            offerGold === 'yes' ? 1 : 0,
            karatsJson,
            karatValuesJson,
            null, // Initially set image to null
            'pending', // Default status
            branch_id,
            goldPricePerGram,
            weightInGrams,
            makingCharges,
            additionalMaterialsCharges,
            baseEstimatedPrice,
            estimatedPrice,
            totalAmount,
            advancePaymentAmount,
            totalPaymentAmount,
            paymentStatus,
            selectedKarat,
            goldPurity
          ];
      } else {
          // Include price fields without branch_id
          sql = `
            INSERT INTO orders (
              category,
              supplier_id,
              quantity,
              offer_gold,
              selected_karats,
              karat_values,
              design_image,
              status,
              gold_price_per_gram,
              weight_in_grams,
              making_charges,
              additional_materials_charges,
              base_estimated_price,
              estimated_price,
              total_amount,
              advance_payment_amount,
              total_payment_amount,
              payment_status,
              selectedKarat,
              goldPurity,
              created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
          `;

          values = [
            category,
            supplier,
            quantity,
            offerGold === 'yes' ? 1 : 0,
            karatsJson,
            karatValuesJson,
            null, // Initially set image to null
            'pending', // Default status
            goldPricePerGram,
            weightInGrams,
            makingCharges,
            additionalMaterialsCharges,
            baseEstimatedPrice,
            estimatedPrice,
            totalAmount,
            advancePaymentAmount,
            totalPaymentAmount,
            paymentStatus,
            selectedKarat,
            goldPurity
          ];
      }
      } else {
        // Use the original queries without price fields
        if (branchColumnExists && branch_id) {
          // Include branch_id in the query if the column exists and branch_id is provided
          sql = `
            INSERT INTO orders (
              category,
              supplier_id,
              quantity,
              offer_gold,
              selected_karats,
              karat_values,
              design_image,
              status,
              branch_id,
              created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
          `;

          values = [
            category,
            supplier,
            quantity,
            offerGold === 'yes' ? 1 : 0,
            karatsJson,
            karatValuesJson,
            null, // Initially set image to null
            'pending', // Default status
            branch_id
          ];
      } else {
          // Use the original query if branch_id column doesn't exist or branch_id is not provided
          sql = `
            INSERT INTO orders (
              category,
              supplier_id,
              quantity,
              offer_gold,
              selected_karats,
              karat_values,
              design_image,
              status,
              created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
          `;

          values = [
            category,
            supplier,
            quantity,
            offerGold === 'yes' ? 1 : 0,
            karatsJson,
            karatValuesJson,
            null, // Initially set image to null
            'pending' // Default status
          ];
        }
      }

      con.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error creating order:", err);
          return res.status(500).json({ message: "Database error", error: err.message });
        }

        const orderId = result.insertId;
        console.log(`Order created with ID: ${orderId}`);

        // If there's an image, save it and update the order
        if (image) {
          try {
            const imagePath = saveBase64Image(image, orderId);

            if (imagePath) {
              // Update the order with the image path
              const updateSql = "UPDATE orders SET design_image = ? WHERE order_id = ?";
              con.query(updateSql, [imagePath, orderId], (updateErr) => {
                if (updateErr) {
                  console.error("Error updating order with image:", updateErr);
                  // Still return success, just log the error
                }

                res.status(201).json({
                  success: true,
                  message: "Order created successfully with image",
                  orderId: orderId,
                  imagePath: imagePath
                });
              });
            } else {
              // Return success even if image saving failed
              res.status(201).json({
                success: true,
                message: "Order created successfully, but image could not be saved",
                orderId: orderId
              });
            }
          } catch (imageErr) {
            console.error("Error saving image:", imageErr);
            res.status(201).json({
              success: true,
              message: "Order created successfully, but image could not be saved",
              orderId: orderId,
              imageError: imageErr.message
            });
          }
        } else {
          // No image to save
          res.status(201).json({
            success: true,
            message: "Order created successfully",
            orderId: orderId
          });
        }
      });
    });
  });
});

// Update order status
router.put("/update-status/:id", (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const sql = "UPDATE orders SET status = ? WHERE order_id = ?";

  con.query(sql, [status, orderId], (err, result) => {
    if (err) {
      console.error("Error updating order status:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order status updated successfully" });
  });
});

// Delete order
router.delete("/delete/:id", (req, res) => {
  const orderId = req.params.id;

  const sql = "DELETE FROM orders WHERE order_id = ?";

  con.query(sql, [orderId], (err, result) => {
    if (err) {
      console.error("Error deleting order:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  });
});

// Debug endpoint to check user role and branch ID
router.get("/debug/user-info", (req, res) => {
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

  console.log(`DEBUG: Normalized role: '${userRole}'`);

  // EMERGENCY FIX: If the role is 'store manager' (with space), treat it as storemanager
  const isStoreManager = userRole.includes('store') || userRole.includes('manager');
  console.log(`DEBUG: isStoreManager = ${isStoreManager}`);

  res.json({
    originalRole: req.query.role,
    normalizedRole: userRole,
    branchId: branchId,
    isAdmin: userRole === 'admin' || userRole.includes('admin'),
    isStoreManager: userRole === 'storemanager' || isStoreManager,
    isSalesAssociate: userRole === 'salesassociate' || (userRole.includes('sales') && userRole.includes('associate')),
    isCashier: userRole === 'cashier' || userRole.includes('cashier'),
    roleIncludes: {
      store: userRole.includes('store'),
      manager: userRole.includes('manager'),
      sales: userRole.includes('sales'),
      associate: userRole.includes('associate'),
      admin: userRole.includes('admin'),
      cashier: userRole.includes('cashier')
    }
  });
});

// Debug endpoint to check if there are any orders in the database
router.get("/debug/check-orders", (req, res) => {
  console.log('DEBUG: Checking if there are any orders in the database');

  // Simple query to count orders
  const sql = "SELECT COUNT(*) as count FROM orders";

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error counting orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    const count = results[0].count;
    console.log(`DEBUG: Found ${count} orders in the database`);

    // If there are orders, get some sample data
    if (count > 0) {
      const sampleSql = "SELECT * FROM orders LIMIT 3";
      con.query(sampleSql, (sampleErr, sampleResults) => {
        if (sampleErr) {
          console.error("Error fetching sample orders:", sampleErr);
          return res.json({ count, hasSamples: false });
        }

        console.log('DEBUG: Sample orders:', sampleResults);
        res.json({
          count,
          hasSamples: true,
          samples: sampleResults
        });
      });
    } else {
      res.json({ count, hasSamples: false });
    }
  });
});

export { router as orderRouter };
