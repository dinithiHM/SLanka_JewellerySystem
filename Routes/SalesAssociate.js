import express from "express";
import fs from "fs";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// ✅ GET Sales Associates with Branch Name (JOIN users + branches)
router.get("/", (req, res) => {
  const sql = `
    SELECT users.*, branches.branch_name 
    FROM users 
    LEFT JOIN branches ON users.branch_id = branches.branch_id
    WHERE users.role = 'Sales Associate'
  `;

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(results || []); // Ensure response is always an array
  });
});

// ✅ GET a Single Sales Associate by ID with Branch Name (JOIN users + branches)
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const sql = `
    SELECT users.*, branches.branch_name 
    FROM users 
    LEFT JOIN branches ON users.branch_id = branches.branch_id
    WHERE users.id = ? AND users.role = 'Sales Associate'
  `;

  con.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Sales Associate not found" });
    }
    res.json(results[0]); // Send single user object
  });
});

// ✅ CREATE Sales Associate
router.post("/create", (req, res) => {
  const { username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, branchId } = req.body;

  const parsedBranchId = parseInt(branchId, 10);
  if (isNaN(parsedBranchId)) {
    return res.status(400).json({ message: "Invalid branch ID. It must be a number." });
  }

  const sql = `INSERT INTO users (username, email, password, first_name, last_name, nic, phone, address, blood_type, sex, role, branch_id)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, parsedBranchId];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.status(201).json({ message: "Sales Associate created successfully", userId: result.insertId });
  });
});

// ✅ UPDATE Sales Associate
router.put("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, branchId } = req.body;

  const parsedBranchId = parseInt(branchId, 10);
  if (isNaN(parsedBranchId)) {
    return res.status(400).json({ message: "Invalid branch ID. It must be a number." });
  }

  const sql = `UPDATE users 
               SET username=?, email=?, password=?, first_name=?, last_name=?, nic=?, phone=?, address=?, blood_type=?, sex=?, role=?, branch_id=? 
               WHERE id=? AND role = 'Sales Associate'`;
  const values = [username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, parsedBranchId, userId];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Sales Associate updated successfully" });
  });
});

// ✅ DELETE Sales Associate
router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;

  con.query("SELECT img FROM users WHERE id = ? AND role = 'Sales Associate'", [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    if (results.length === 0) return res.status(404).json({ message: "Sales Associate not found" });

    const imagePath = results[0].img;
    if (imagePath && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    con.query("DELETE FROM users WHERE id = ? AND role = 'Sales Associate'", [userId], (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });
      res.json({ message: "Sales Associate deleted successfully" });
    });
  });
});

export { router as salesAssociateRouter };
