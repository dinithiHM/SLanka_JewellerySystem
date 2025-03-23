import express from "express";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// ✅ GET All Suppliers
router.get("/", (req, res) => {
  const sql = "SELECT * FROM suppliers";

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(results || []);
  });
});

// ✅ GET Supplier by ID
router.get("/:id", (req, res) => {
  const supplierId = req.params.id;
  const sql = "SELECT * FROM suppliers WHERE id = ?";

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
    WHERE id=?
  `;

  const values = [name, address, contact_no, manufacturing_items, category, supplierId];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Supplier updated successfully" });
  });
});

// ✅ DELETE Supplier
router.delete("/delete/:id", (req, res) => {
  const supplierId = req.params.id;

  con.query("DELETE FROM suppliers WHERE id = ?", [supplierId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Supplier deleted successfully" });
  });
});

export { router as supplierRouter };
