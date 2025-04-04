import express from "express";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  console.log('GET /sale-items/test - Test route');
  return res.json({ message: 'Sale items router is working!' });
});

// Get all jewellery items for sale
router.get("/available", (req, res) => {
  console.log('GET /sale-items/available - Fetching available items');
  
  try {
    // Get all items for now to debug
    const sql = "SELECT item_id, product_title, category, in_stock, selling_price FROM jewellery_items";
    console.log('Executing SQL query:', sql);
    
    con.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching available items:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      
      console.log(`Found ${results ? results.length : 0} items in jewellery_items table`);
      if (results && results.length > 0) {
        console.log('First item found:', JSON.stringify(results[0]));
      } else {
        console.log('No items found in jewellery_items table');
      }
      
      return res.json(results || []);
    });
  } catch (error) {
    console.error('Unexpected error in /available route:', error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

export { router as saleItemsRouter };
