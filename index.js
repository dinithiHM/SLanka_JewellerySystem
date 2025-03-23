import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import { adminRouter } from "./Routes/AdminRoute.js";
import { teacherRouter } from "./Routes/TeacherRoute.js"; // ✅ Import Teacher Routes
import { supplierRouter } from "./Routes/supplierRoutes.js";
import { userRouter } from "./Routes/userRouter.js"; // ✅ Import User Routes
import { salesAssociateRouter } from "./Routes/SalesAssociate.js"; 

const app = express(); 

// ✅ Enable CORS for frontend (Modify port if needed)
app.use(
  cors({
    origin: ["http://localhost:3000"], // Make sure this matches your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Enable file upload handling
app.use(fileUpload());

// ✅ Serve static files (Images, etc.)
app.use(express.static("Public"));

// ✅ Debug Middleware (Logs incoming requests)
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ API Routes
app.use("/auth", adminRouter);
app.use("/teachers", teacherRouter); // Teacher-related routes
app.use("/suppliers", supplierRouter);
app.use("/users", userRouter); // ✅ Add user-related routes
app.use("/sales-associates", salesAssociateRouter);

// ✅ Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port 3002`);
});
