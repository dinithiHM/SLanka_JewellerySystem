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

// Get all orders
router.get("/", (req, res) => {
  const sql = "SELECT * FROM orders";

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
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

// Get order by ID
router.get("/:id", (req, res) => {
  const orderId = req.params.id;
  const sql = "SELECT * FROM orders WHERE order_id = ?";

  con.query(sql, [orderId], (err, results) => {
    if (err) {
      console.error("Error fetching order:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Order not found" });
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

// Create new order
router.post("/create", (req, res) => {
  const {
    category,
    supplier,
    quantity,
    offerGold,
    selectedKarats,
    karatValues,
    image
  } = req.body;

  // Basic validation
  if (!category || !supplier || !quantity) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Convert arrays and objects to JSON strings for storage
  const karatsJson = JSON.stringify(selectedKarats || []);
  const karatValuesJson = JSON.stringify(karatValues || {});

  // First insert the order without the image
  const sql = `
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

  const values = [
    category,
    supplier,
    quantity,
    offerGold === 'yes' ? 1 : 0,
    karatsJson,
    karatValuesJson,
    null, // Initially set image to null
    'pending' // Default status
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error creating order:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    const orderId = result.insertId;

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
              message: "Order created successfully with image",
              orderId: orderId,
              imagePath: imagePath
            });
          });
        } else {
          // Return success even if image saving failed
          res.status(201).json({
            message: "Order created successfully, but image could not be saved",
            orderId: orderId
          });
        }
      } catch (imageErr) {
        console.error("Error saving image:", imageErr);
        res.status(201).json({
          message: "Order created successfully, but image could not be saved",
          orderId: orderId,
          imageError: imageErr.message
        });
      }
    } else {
      // No image to save
      res.status(201).json({
        message: "Order created successfully",
        orderId: orderId
      });
    }
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

export { router as orderRouter };
