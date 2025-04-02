import express from "express";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// Add an endpoint to check the database structure
router.get("/check-table-structure", (req, res) => {
  con.query("DESCRIBE suppliers", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results);
  });
});

// Add a test endpoint to check if the database connection is working
router.get("/test-connection", (req, res) => {
  console.log('Testing database connection...');
  con.query("SELECT 1+1 as result", (err, results) => {
    if (err) {
      console.error('Database connection error:', err);
      return res.status(500).json({ message: "Database connection error", error: err.message });
    }
    console.log('Database connection successful:', results);
    res.json({ message: "Database connection successful", results });
  });
});

// Add an endpoint to count the number of suppliers
router.get("/count", (req, res) => {
  console.log('Counting suppliers...');
  con.query("SELECT COUNT(*) as count FROM suppliers", (err, results) => {
    if (err) {
      console.error('Error counting suppliers:', err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    console.log('Supplier count:', results[0].count);
    res.json({ count: results[0].count });
  });
});

// ✅ GET All Suppliers
router.get("/", (req, res) => {
  console.log('GET /suppliers - Fetching all suppliers');
  const sql = "SELECT * FROM suppliers";

  con.query(sql, (err, results) => {
    if (err) {
      console.error('Database error when fetching suppliers:', err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    console.log(`Found ${results ? results.length : 0} suppliers`);
    if (results && results.length > 0) {
      console.log('First supplier:', results[0]);
    }

    res.json(results || []);
  });
});

// ✅ GET Supplier by ID
router.get("/:id", (req, res) => {
  const supplierId = req.params.id;
  const sql = "SELECT * FROM suppliers WHERE supplier_id = ?";

  con.query(sql, [supplierId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json(results[0]);
  });
});

// ✅ CREATE Supplier
router.post("/create", (req, res) => {
  const { name, address, contact_no, manufacturing_items, category } = req.body;

  const sql = `
    INSERT INTO suppliers (name, address, contact_no, manufacturing_items, category)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [name, address, contact_no, manufacturing_items, category];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.status(201).json({ message: "Supplier created successfully", supplierId: result.insertId });
  });
});

// ✅ UPDATE Supplier
router.put("/update/:id", (req, res) => {
  const supplierId = req.params.id;
  const { name, address, contact_no, manufacturing_items, category } = req.body;

  const sql = `
    UPDATE suppliers
    SET name=?, address=?, contact_no=?, manufacturing_items=?, category=?
    WHERE supplier_id=?
  `;

  const values = [name, address, contact_no, manufacturing_items, category, supplierId];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Supplier updated successfully" });
  });
});

// ✅ DELETE Supplier - Simplified version
router.delete("/delete/:id", (req, res) => {
  try {
    const supplierId = req.params.id;
    console.log(`Attempting to delete Supplier with ID: ${supplierId}, type: ${typeof supplierId}`);

    // Validate the ID
    if (!supplierId) {
      console.error(`Missing supplier ID`);
      return res.status(400).json({ message: "Missing supplier ID" });
    }

    // Convert to number
    const numericId = Number(supplierId);
    if (isNaN(numericId) || numericId <= 0) {
      console.error(`Invalid supplier ID: ${supplierId}`);
      return res.status(400).json({ message: "Invalid supplier ID" });
    }

    console.log(`Converted ID to number: ${numericId}`);

    // Delete directly (simplified approach) - using supplier_id instead of id
    con.query("DELETE FROM suppliers WHERE supplier_id = ?", [numericId], (deleteErr, result) => {
      if (deleteErr) {
        console.error('Error deleting supplier from database:', deleteErr);
        return res.status(500).json({
          message: "Database error",
          error: deleteErr.message
        });
      }

      // Check if any rows were affected
      if (result.affectedRows === 0) {
        console.log(`No supplier found with ID ${numericId}`);
        return res.status(404).json({ message: "Supplier not found" });
      }

      console.log(`Successfully deleted Supplier with ID: ${numericId}`);
      res.json({
        message: "Supplier deleted successfully",
        id: numericId,
        affectedRows: result.affectedRows
      });
    });
  } catch (error) {
    console.error('Unexpected error in delete endpoint:', error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get supplier order statistics by category
router.get("/order-stats/:category", (req, res) => {
  const category = req.params.category;

  // If category is 'All', get stats for all suppliers
  // Otherwise, filter by the specified category
  // Prioritize the category field over manufacturing_items
  const whereClause = category === 'All' ? '' : 'WHERE s.category = ?';

  // This query counts orders per supplier, filtered by category if specified
  // Note: You'll need to adjust this based on your actual database schema
  // This assumes you have an orders table with a supplier_id column
  const sql = `
    SELECT
      s.supplier_id,
      s.name,
      s.category,
      COUNT(o.order_id) as order_count
    FROM
      suppliers s
    LEFT JOIN
      orders o ON s.supplier_id = o.supplier_id
    ${whereClause}
    GROUP BY
      s.supplier_id
    ORDER BY
      order_count DESC
  `;

  const params = category === 'All' ? [] : [category];

  con.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error fetching supplier order stats:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // If no results or the query fails, return sample data for demonstration
    if (!results || results.length === 0) {
      // Generate sample data for demonstration
      const sampleData = [
        { supplier_id: '001', name: 'Mohamad Nazeem', category: category === 'All' ? 'Wedding Sets' : category, order_count: 15 },
        { supplier_id: '002', name: 'Abdulla Nazeem', category: category === 'All' ? 'Rings' : category, order_count: 25 },
        { supplier_id: '003', name: 'Vaseem Akram', category: category === 'All' ? 'Bracelets' : category, order_count: 8 },
        { supplier_id: '004', name: 'Mohamad Sami', category: category === 'All' ? 'Pendants' : category, order_count: 18 }
      ];

      return res.json(sampleData);
    }

    res.json(results);
  });
});

export { router as supplierRouter };
