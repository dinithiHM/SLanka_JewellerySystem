import express from "express";
import con from "../utils/db.js";

const router = express.Router();

// Get all cashiers
router.get("/", (req, res) => {
  console.log("GET /cashiers - Fetching all cashiers");

  const sql = `
    SELECT
      user_id,
      first_name,
      last_name,
      email,
      username,
      branch_id,
      nic,
      phone,
      address
    FROM users
    WHERE role = 'cashier'
    ORDER BY first_name ASC
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching cashiers:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    console.log(`Found ${results.length} cashiers`);
    res.json(results);
  });
});

// Check table structure (for debugging)
router.get("/check-table-structure", (req, res) => {
  console.log("GET /cashiers/check-table-structure - Checking users table structure");

  const sql = "DESCRIBE users";

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error checking users table structure:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    res.json(results);
  });
});

// Create a new cashier
router.post("/create", (req, res) => {
  console.log("POST /cashiers/create - Creating new cashier");
  console.log("Request body:", req.body);

  const {
    username,
    email,
    password,
    first_name,
    last_name,
    nic,
    phone,
    address,
    branch_id,
    role
  } = req.body;

  // Validate required fields
  if (!username || !email || !password || !first_name || !last_name || !nic || !phone || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if username or email already exists
  const checkSql = "SELECT * FROM users WHERE username = ? OR email = ?";

  con.query(checkSql, [username, email], (err, results) => {
    if (err) {
      console.error("Error checking existing user:", err);
      return res.status(500).json({
        message: "Database error",
        error: err.message
      });
    }

    if (results.length > 0) {
      // Check if username exists
      const usernameExists = results.some(user => user.username === username);
      // Check if email exists
      const emailExists = results.some(user => user.email === email);

      if (usernameExists) {
        return res.status(409).json({ message: "Username already exists" });
      }

      if (emailExists) {
        return res.status(409).json({ message: "Email already exists" });
      }
    }

    // Insert new cashier
    const insertSql = `
      INSERT INTO users (
        username,
        email,
        password,
        first_name,
        last_name,
        nic,
        phone,
        address,
        branch_id,
        role
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      username,
      email,
      password, // In a production app, you should hash this password
      first_name,
      last_name,
      nic,
      phone,
      address,
      branch_id || 1, // Default to branch_id 1 if not provided
      "cashier" // Force role to be cashier regardless of what was sent
    ];

    con.query(insertSql, values, (err, result) => {
      if (err) {
        console.error("Error creating cashier:", err);
        return res.status(500).json({
          message: "Database error",
          error: err.message,
          code: err.code,
          sqlState: err.sqlState,
          sqlMessage: err.sqlMessage
        });
      }

      console.log(`Created new cashier with ID ${result.insertId}`);
      res.status(201).json({
        message: "Cashier created successfully",
        userId: result.insertId
      });
    });
  });
});

// Update an existing cashier
router.put("/update/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`PUT /cashiers/update/${userId} - Updating cashier`);
  console.log("Request body:", req.body);

  if (!userId) {
    return res.status(400).json({ message: "Missing user ID" });
  }

  const {
    username,
    email,
    password,
    first_name,
    last_name,
    nic,
    phone,
    address,
    branch_id
  } = req.body;

  // Validate required fields
  if (!username || !email || !first_name || !last_name || !nic || !phone || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if username or email already exists for other users
  const checkSql = "SELECT * FROM users WHERE (username = ? OR email = ?) AND user_id != ?";

  con.query(checkSql, [username, email, userId], (err, results) => {
    if (err) {
      console.error("Error checking existing user:", err);
      return res.status(500).json({
        message: "Database error",
        error: err.message
      });
    }

    if (results.length > 0) {
      // Check if username exists
      const usernameExists = results.some(user => user.username === username);
      // Check if email exists
      const emailExists = results.some(user => user.email === email);

      if (usernameExists) {
        return res.status(409).json({ message: "Username already exists" });
      }

      if (emailExists) {
        return res.status(409).json({ message: "Email already exists" });
      }
    }

    // Update cashier
    let updateSql = `
      UPDATE users SET
        username = ?,
        email = ?,
        first_name = ?,
        last_name = ?,
        nic = ?,
        phone = ?,
        address = ?,
        branch_id = ?
    `;

    let values = [
      username,
      email,
      first_name,
      last_name,
      nic,
      phone,
      address,
      branch_id || 1 // Default to branch_id 1 if not provided
    ];

    // Add password to update if provided
    if (password && password.trim() !== '') {
      updateSql += ", password = ?";
      values.push(password); // In a production app, you should hash this password
    }

    // Add WHERE clause
    updateSql += " WHERE user_id = ? AND role = 'cashier'";
    values.push(userId);

    con.query(updateSql, values, (err, result) => {
      if (err) {
        console.error("Error updating cashier:", err);
        return res.status(500).json({
          message: "Database error",
          error: err.message,
          code: err.code,
          sqlState: err.sqlState,
          sqlMessage: err.sqlMessage
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Cashier not found or not updated" });
      }

      console.log(`Updated cashier with ID ${userId}`);
      res.json({ message: "Cashier updated successfully" });
    });
  });
});

// Delete a cashier
router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`DELETE /cashiers/delete/${userId} - Deleting cashier`);

  if (!userId) {
    return res.status(400).json({ message: "Missing user ID" });
  }

  const sql = "DELETE FROM users WHERE user_id = ? AND role = 'cashier'";

  con.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error deleting cashier:", err);
      return res.status(500).json({
        message: "Database error",
        error: err.message,
        code: err.code,
        sqlState: err.sqlState,
        sqlMessage: err.sqlMessage
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cashier not found or already deleted" });
    }

    console.log(`Deleted cashier with ID ${userId}`);
    res.json({ message: "Cashier deleted successfully" });
  });
});

export { router as cashierRouter };
