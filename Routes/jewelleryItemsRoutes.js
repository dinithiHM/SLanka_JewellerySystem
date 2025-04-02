import express from "express";
import con from "../utils/db.js"; // Database connection
import { fileURLToPath } from "url";
import path from "path";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get all jewellery items
router.get("/", (req, res) => {
  const sql = "SELECT * FROM jewellery_items ORDER BY product_added DESC";

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching jewellery items:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results || []);
  });
});

// Get jewellery item by ID
router.get("/:id", (req, res) => {
  const itemId = req.params.id;
  const sql = "SELECT * FROM jewellery_items WHERE item_id = ?";

  con.query(sql, [itemId], (err, results) => {
    if (err) {
      console.error("Error fetching jewellery item:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Jewellery item not found" });
    }
    res.json(results[0]);
  });
});

// Create new jewellery item
router.post("/create", (req, res) => {
  const {
    product_title,
    category,
    in_stock,
    buying_price,
    selling_price
  } = req.body;

  // Basic validation
  if (!product_title || !category || in_stock === undefined || !buying_price || !selling_price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    INSERT INTO jewellery_items (
      product_title,
      category,
      in_stock,
      buying_price,
      selling_price,
      product_added
    ) VALUES (?, ?, ?, ?, ?, NOW())
  `;

  const values = [
    product_title,
    category,
    in_stock,
    buying_price,
    selling_price
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error creating jewellery item:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    res.status(201).json({
      message: "Jewellery item created successfully",
      itemId: result.insertId
    });
  });
});

// Update jewellery item
router.put("/update/:id", (req, res) => {
  const itemId = req.params.id;
  const {
    product_title,
    category,
    in_stock,
    buying_price,
    selling_price
  } = req.body;

  // Basic validation
  if (!product_title || !category || in_stock === undefined || !buying_price || !selling_price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    UPDATE jewellery_items
    SET 
      product_title = ?,
      category = ?,
      in_stock = ?,
      buying_price = ?,
      selling_price = ?,
      updated_at = NOW()
    WHERE item_id = ?
  `;

  const values = [
    product_title,
    category,
    in_stock,
    buying_price,
    selling_price,
    itemId
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating jewellery item:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Jewellery item not found" });
    }

    res.json({ message: "Jewellery item updated successfully" });
  });
});

// Delete jewellery item
router.delete("/delete/:id", (req, res) => {
  const itemId = req.params.id;

  const sql = "DELETE FROM jewellery_items WHERE item_id = ?";

  con.query(sql, [itemId], (err, result) => {
    if (err) {
      console.error("Error deleting jewellery item:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Jewellery item not found" });
    }

    res.json({ message: "Jewellery item deleted successfully" });
  });
});

// Get items by category
router.get("/category/:category", (req, res) => {
  const category = req.params.category;
  const sql = "SELECT * FROM jewellery_items WHERE category = ? ORDER BY product_added DESC";

  con.query(sql, [category], (err, results) => {
    if (err) {
      console.error("Error fetching jewellery items by category:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results || []);
  });
});

export { router as jewelleryItemsRouter };
