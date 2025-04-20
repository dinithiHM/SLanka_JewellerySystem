import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
    console.log('GET /users - Fetching all users');

    const sql = `
        SELECT u.*, b.branch_name
        FROM users u
        LEFT JOIN branches b ON u.branch_id = b.branch_id
        ORDER BY u.user_id
    `;

    con.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ message: "Database error", error: err.message });
        }

        console.log(`Found ${results.length} users`);
        res.json(results || []);
    });
});

// User Login Route
router.post("/userlogin", (req, res) => {
    const { email, password } = req.body;

    // Log email to ensure the correct one is sent from the frontend
    console.log("Login attempt with email:", email);

    // First, find the user by email only
    const userQuery = "SELECT * FROM users WHERE email = ?";

    con.query(userQuery, [email], async (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ loginStatus: false, Error: "Query error" });
        }

        console.log("Query result:", result); // Log the query result

        if (result.length > 0) {
            const user = result[0];

            // Check if password is already hashed (starts with '$2b$' for bcrypt)
            let passwordMatch = false;

            if (user.password.startsWith('$2b$')) {
                // Password is already hashed, compare with bcrypt
                try {
                    passwordMatch = await bcrypt.compare(password, user.password);
                } catch (bcryptError) {
                    console.error("bcrypt compare error:", bcryptError);
                    return res.status(500).json({ loginStatus: false, Error: "Authentication error" });
                }
            } else {
                // Legacy plain text password, direct comparison
                passwordMatch = (user.password === password);

                // If match, update to hashed password for future logins
                if (passwordMatch) {
                    try {
                        const hashedPassword = await bcrypt.hash(password, 10);
                        const updateSql = "UPDATE users SET password = ? WHERE user_id = ?";
                        con.query(updateSql, [hashedPassword, user.user_id], (updateErr) => {
                            if (updateErr) {
                                console.error("Error updating to hashed password:", updateErr);
                                // Continue with login even if update fails
                            } else {
                                console.log(`Updated user ${user.user_id} to hashed password`);
                            }
                        });
                    } catch (hashError) {
                        console.error("Error hashing password during login:", hashError);
                        // Continue with login even if hashing fails
                    }
                }
            }

            if (!passwordMatch) {
                console.log("Password mismatch for user:", email);
                return res.status(401).json({ loginStatus: false, Error: "Wrong email or password" });
            }

            const accessToken = jwt.sign(
                { role: user.role, email: user.email, id: user.id },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );

            res.cookie("token", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 24 * 60 * 60 * 1000,
            });

            let redirectUrl = "/DashView/user";
            if (user.role === "Store Manager") redirectUrl = "/DashView/storeManager";
            if (user.role === "Sales Associate") redirectUrl = "/DashView/salesAssociate";
            if (user.role === "Cashier") redirectUrl = "/DashView/cashier";
            if (user.role === "Admin") redirectUrl = "/DashView/admin";

            // If user is a Store Manager, Sales Associate, or Cashier, handle branch information
            if ((user.role === "Store Manager" || user.role === "Sales Associate" || user.role === "Cashier") && user.branch_id) {
                // Map branch_id to branch name directly
                let branchName = null;
                // Convert branch_id to number for comparison
                const branchId = Number(user.branch_id);
                console.log("Store Manager branch_id:", branchId, typeof branchId);

                if (branchId === 1) {
                    branchName = "Mahiyanganaya Branch";
                    console.log("Setting branch name to Mahiyanganaya Branch");
                } else if (branchId === 2) {
                    branchName = "Mahaoya Branch";
                    console.log("Setting branch name to Mahaoya Branch");
                } else {
                    branchName = `Branch ${branchId}`;
                    console.log(`Setting branch name to Branch ${branchId}`);
                }

                return res.status(200).json({
                    loginStatus: true,
                    message: `Login successful - ${user.role}`,
                    accessToken,
                    role: user.role,
                    redirectUrl,
                    userName: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
                    userId: user.user_id,
                    branchName: branchName,
                    branchId: user.branch_id
                });
            } else {
                return res.status(200).json({
                    loginStatus: true,
                    message: `Login successful - ${user.role}`,
                    accessToken,
                    role: user.role,
                    redirectUrl,
                    userName: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
                    userId: user.user_id,
                    branchId: user.branch_id || null
                });
            }
        } else {
            console.log("Invalid email or password for user:", email);
            return res.status(401).json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});

export { router as userRouter };
