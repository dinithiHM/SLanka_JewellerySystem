import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { adminRouter } from "./Routes/AdminRoute.js";
import { supplierRouter } from "./Routes/supplierRoutes.js";
import { userRouter } from "./Routes/userRouter.js"; // ✅ Import User Routes
import { salesAssociateRouter } from "./Routes/SalesAssociate.js";
import { storeManagerRouter } from "./Routes/StoreManagerRoute.js"; // ✅ Import Store Manager Routes
import { orderRouter } from "./Routes/orderRoutes.js"; // ✅ Import Order Routes
import { jewelleryItemsRouter } from "./Routes/jewelleryItemsRoutes.js"; // ✅ Import Jewellery Items Routes
import { salesRouter } from "./Routes/salesRoutes.js"; // ✅ Import Sales Routes
import { saleItemsRouter } from "./Routes/saleItemsRoutes.js"; // ✅ Import Sale Items Routes
import { cashierRouter } from "./Routes/cashierRoutes.js"; // ✅ Import Cashier Routes
import { advancePaymentRouter } from "./Routes/advancePaymentRoutes.js"; // ✅ Import Advance Payment Routes
import { customOrderRouter } from "./Routes/customOrderRoutes.simple.js"; // ✅ Import Simplified Custom Order Routes
import { categoryRouter } from "./Routes/categoryRoutes.js"; // ✅ Import Category Routes
import fixPaymentStatusRouter from "./Routes/fixPaymentStatusRoute.js"; // ✅ Import Fix Payment Status Routes

const app = express();

// ✅ Enable CORS for frontend (Modify port if needed)
app.use(
  cors({
    origin: ["http://localhost:3000"], // Make sure this matches your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Increase JSON payload limit to 50MB
app.use(express.json({ limit: '50mb' }));
// Increase URL-encoded payload limit to 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// ✅ Enable file upload handling with increased limits
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
  abortOnLimit: true,
  responseOnLimit: "File size is too large. Maximum file size allowed is 50MB."
}));

// ✅ Serve static files (Images, etc.)
app.use(express.static("Public"));

// Create a specific route for serving uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'Public', 'uploads')));
console.log(`Serving images from: ${path.join(__dirname, 'Public', 'uploads')}`);

// Add a route to check if an image exists
app.get('/check-image/:imagePath', (req, res) => {
  const imagePath = req.params.imagePath;
  const fullPath = path.join(__dirname, 'Public', 'uploads', imagePath);

  if (fs.existsSync(fullPath)) {
    res.json({ exists: true, path: `/uploads/${imagePath}` });
  } else {
    res.json({ exists: false });
  }
});

// ✅ Debug Middleware (Logs incoming requests)
app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ API Routes
app.use("/auth", adminRouter);
app.use("/suppliers", supplierRouter);
app.use("/users", userRouter); // ✅ Add user-related routes
app.use("/sales-associates", salesAssociateRouter);
app.use("/store-managers", storeManagerRouter); // ✅ Add store manager routes
app.use("/orders", orderRouter); // ✅ Add order-related routes
app.use("/jewellery-items", jewelleryItemsRouter); // ✅ Add jewellery items routes
app.use("/sales", salesRouter); // ✅ Add sales routes
app.use("/sale-items", saleItemsRouter); // ✅ Add sale items routes
app.use("/cashiers", cashierRouter); // ✅ Add cashier routes
app.use("/advance-payments", advancePaymentRouter); // ✅ Add advance payment routes
app.use("/custom-orders", customOrderRouter); // ✅ Add custom order routes
app.use("/categories", categoryRouter); // ✅ Add category routes
app.use("/maintenance", fixPaymentStatusRouter); // ✅ Add maintenance routes

// ✅ Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port 3002`);
});
