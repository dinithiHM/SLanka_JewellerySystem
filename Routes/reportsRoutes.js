import express from 'express';
import {
  getSalesReport,
  getInventoryReport,
  getCurrentStockReport,
  getGoldStockReport,
  getLowStockReport,
  getInventoryValuationReport,
  exportReportCSV
} from '../Controllers/reportsController.js';
import verifyToken from '../Middleware/authMiddleware.js';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(verifyToken);

// Sales reports
router.get('/sales', getSalesReport);

// Inventory reports
router.get('/inventory', getInventoryReport);
router.get('/inventory/current-stock', getCurrentStockReport);
router.get('/inventory/gold-stock', getGoldStockReport);
router.get('/inventory/low-stock', getLowStockReport);
router.get('/inventory/valuation', getInventoryValuationReport);

// Export reports
router.get('/export', exportReportCSV);

export default router;
