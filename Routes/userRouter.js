import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// User Login Route
router.post("/userlogin", (req, res) => {
    const { email, password } = req.body;

    // Log email to ensure the correct one is sent from the frontend
    console.log("Login attempt with email:", email);

    const userQuery = "SELECT * FROM users WHERE email = ? AND password = ?";

    con.query(userQuery, [email, password], async (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ loginStatus: false, Error: "Query error" });
        }

        console.log("Query result:", result); // Log the query result

        if (result.length > 0) {
            const user = result[0];

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
            if (user.role === "Admin") redirectUrl = "/DashView/admin";

            // If user is a Store Manager, handle branch information
            if (user.role === "Store Manager" && user.branch_id) {
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
