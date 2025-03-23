import express from "express";
import fs from "fs";
import con from "../utils/db.js"; // Database connection

const router = express.Router();

// ✅ GET All Users with Branch Name (JOIN users + branches)
router.get("/", (req, res) => {
  const sql = `
    SELECT users.*, branches.branch_name 
    FROM users 
    LEFT JOIN branches ON users.branch_id = branches.branch_id
  `;

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(results || []); // Ensure response is always an array
  });
});

// ✅ GET Store Managers with Branch Name (JOIN users + branches)
router.get("/store-managers", (req, res) => {
  const sql = `
    SELECT users.*, branches.branch_name 
    FROM users 
    LEFT JOIN branches ON users.branch_id = branches.branch_id
    WHERE users.role = 'Store Manager'
  `;

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(results || []); // Ensure response is always an array
  });
});

// ✅ GET a Single User by ID with Branch Name (JOIN users + branches)
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const sql = `
    SELECT users.*, branches.branch_name 
    FROM users 
    LEFT JOIN branches ON users.branch_id = branches.branch_id
    WHERE users.id = ?
  `;

  con.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(results[0]); // Send single user object
  });
});

// ✅ CREATE User
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
    res.status(201).json({ message: "User created successfully", userId: result.insertId });
  });
});

// ✅ UPDATE User
router.put("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, branchId } = req.body;

  const parsedBranchId = parseInt(branchId, 10);
  if (isNaN(parsedBranchId)) {
    return res.status(400).json({ message: "Invalid branch ID. It must be a number." });
  }

  const sql = `UPDATE users 
               SET username=?, email=?, password=?, first_name=?, last_name=?, nic=?, phone=?, address=?, blood_type=?, sex=?, role=?, branch_id=? 
               WHERE id=?`;
  const values = [username, email, password, firstName, lastName, nic, phone, address, bloodType, sex, role, parsedBranchId, userId];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "User updated successfully" });
  });
});

// ✅ DELETE User
router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;

  con.query("SELECT img FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });

    const imagePath = results[0].img;
    if (imagePath && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    con.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });
      res.json({ message: "User deleted successfully" });
    });
  });
});

export { router as teacherRouter };
