import express from 'express';
import con from '../utils/db.js';

const router = express.Router();

// Get all categories
router.get("/", (req, res) => {
  console.log('GET /categories - Fetching all categories');
  
  const sql = `
    SELECT 
      category_id, 
      category_name, 
      description
    FROM 
      categories
    ORDER BY 
      category_name
  `;
  
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    res.json(results || []);
  });
});

// Get category by ID
router.get("/:id", (req, res) => {
  const categoryId = req.params.id;
  
  const sql = `
    SELECT 
      category_id, 
      category_name, 
      description
    FROM 
      categories
    WHERE 
      category_id = ?
  `;
  
  con.query(sql, [categoryId], (err, results) => {
    if (err) {
      console.error("Error fetching category:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    
    res.json(results[0]);
  });
});

// Create a new category
router.post("/create", (req, res) => {
  const { category_name, description } = req.body;
  
  if (!category_name) {
    return res.status(400).json({ message: "Category name is required" });
  }
  
  const sql = `
    INSERT INTO categories (
      category_name, 
      description
    ) VALUES (?, ?)
  `;
  
  con.query(sql, [category_name, description || null], (err, result) => {
    if (err) {
      // Check for duplicate entry
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Category already exists" });
      }
      
      console.error("Error creating category:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    res.status(201).json({
      message: "Category created successfully",
      category_id: result.insertId,
      category_name
    });
  });
});

// Update a category
router.put("/:id", (req, res) => {
  const categoryId = req.params.id;
  const { category_name, description } = req.body;
  
  if (!category_name) {
    return res.status(400).json({ message: "Category name is required" });
  }
  
  const sql = `
    UPDATE categories
    SET 
      category_name = ?,
      description = ?
    WHERE 
      category_id = ?
  `;
  
  con.query(sql, [category_name, description || null, categoryId], (err, result) => {
    if (err) {
      // Check for duplicate entry
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Category name already exists" });
      }
      
      console.error("Error updating category:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    
    res.json({
      message: "Category updated successfully",
      category_id: categoryId,
      category_name
    });
  });
});

// Delete a category
router.delete("/:id", (req, res) => {
  const categoryId = req.params.id;
  
  // Check if category is in use
  const checkSql = `
    SELECT COUNT(*) as count
    FROM custom_orders
    WHERE category_id = ?
  `;
  
  con.query(checkSql, [categoryId], (checkErr, checkResults) => {
    if (checkErr) {
      console.error("Error checking category usage:", checkErr);
      return res.status(500).json({ message: "Database error", error: checkErr.message });
    }
    
    if (checkResults[0].count > 0) {
      return res.status(409).json({ 
        message: "Cannot delete category that is in use",
        count: checkResults[0].count
      });
    }
    
    // Safe to delete
    const deleteSql = `
      DELETE FROM categories
      WHERE category_id = ?
    `;
    
    con.query(deleteSql, [categoryId], (deleteErr, deleteResult) => {
      if (deleteErr) {
        console.error("Error deleting category:", deleteErr);
        return res.status(500).json({ message: "Database error", error: deleteErr.message });
      }
      
      if (deleteResult.affectedRows === 0) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      res.json({
        message: "Category deleted successfully",
        category_id: categoryId
      });
    });
  });
});

export { router as categoryRouter };
