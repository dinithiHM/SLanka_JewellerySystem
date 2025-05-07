import express from "express";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  console.log('GET /sale-items/test - Test route');
  return res.json({ message: 'Sale items router is working!' });
});

// Get all jewellery items for sale with branch filtering
router.get("/available", (req, res) => {
  console.log('GET /sale-items/available - Fetching available items');

  // Get branch_id from query parameters
  const branchId = req.query.branch_id;
  console.log('Branch ID from query:', branchId);

  try {
    // Check if branch_id column exists in jewellery_items table
    const checkColumnSql = `
      SELECT COUNT(*) as column_exists
      FROM information_schema.columns
      WHERE table_schema = DATABASE()
      AND table_name = 'jewellery_items'
      AND column_name = 'branch_id'
    `;

    con.query(checkColumnSql, (checkErr, checkResults) => {
      if (checkErr) {
        console.error("Error checking for branch_id column:", checkErr);
        return res.status(500).json({ message: "Database error", error: checkErr.message });
      }

      const branchColumnExists = checkResults[0].column_exists > 0;
      console.log(`Branch column exists: ${branchColumnExists}`);

      let sql, queryParams = [];

      if (branchColumnExists && branchId) {
        // Filter by branch_id if the column exists and branch_id is provided
        sql = `
          SELECT item_id, product_title, category, in_stock, selling_price,
                 is_solid_gold, gold_carat, weight, assay_certificate
          FROM jewellery_items
          WHERE branch_id = ? OR branch_id IS NULL
        `;
        queryParams = [branchId];
      } else {
        // Get all items if branch_id column doesn't exist or branch_id is not provided
        sql = `SELECT item_id, product_title, category, in_stock, selling_price,
                      is_solid_gold, gold_carat, weight, assay_certificate
               FROM jewellery_items`;
      }

      console.log('Executing SQL query:', sql, 'with params:', queryParams);

      con.query(sql, queryParams, (err, results) => {
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
    });
  } catch (error) {
    console.error('Unexpected error in /available route:', error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

export { router as saleItemsRouter };
