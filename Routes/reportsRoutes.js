import express from 'express';
import { getSalesReport } from '../Controllers/reportsController.js';
import verifyToken from '../Middleware/authMiddleware.js';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(verifyToken);

// Sales reports
router.get('/sales', getSalesReport);

export default router;
