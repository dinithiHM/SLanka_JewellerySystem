import con from "../utils/db.js";
import { format } from 'date-fns';

// Helper function to format date for SQL queries
const formatDateForSQL = (date) => {
  return format(date, 'yyyy-MM-dd');
};

// Helper function to get date range based on period
const getDateRange = (period) => {
  const today = new Date();
  let startDate = new Date();

  switch (period) {
    case 'today':
      startDate = today;
      break;
    case 'yesterday':
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 1);
      break;
    case 'last7':
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 7);
      break;
    case 'last30':
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30);
      break;
    case 'thisMonth':
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      break;
    case 'lastMonth':
      startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      return {
        startDate: formatDateForSQL(startDate),
        endDate: formatDateForSQL(endOfLastMonth)
      };
    default:
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30); // Default to last 30 days
  }

  return {
    startDate: formatDateForSQL(startDate),
    endDate: formatDateForSQL(today)
  };
};

// Get sales report data
export const getSalesReport = (req, res) => {
  try {
    const { period = 'last30', startDate, endDate, branchId } = req.query;

    // Determine date range
    const dateRange = startDate && endDate
      ? { startDate, endDate }
      : getDateRange(period);

    // Base WHERE clause for branch filtering
    const branchFilter = branchId ? 'AND s.branch_id = ?' : '';
    const branchParams = branchId ? [branchId] : [];

    // Get all branches for the filter dropdown
    const branchesQuery = `SELECT branch_id, branch_name FROM branches ORDER BY branch_name`;

    con.query(branchesQuery, (branchErr, branches) => {
      if (branchErr) {
        console.error('Error fetching branches:', branchErr);
        return res.status(500).json({ message: 'Error fetching branches', error: branchErr.message });
      }

      // Get total sales and transactions
      const salesSummaryQuery = `
        SELECT
          SUM(total_amount) AS totalSales,
          COUNT(*) AS totalTransactions,
          AVG(total_amount) AS averageOrderValue
        FROM sales s
        WHERE sale_date BETWEEN ? AND ? ${branchFilter}
      `;

      con.query(salesSummaryQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (summaryErr, salesResults) => {
        if (summaryErr) {
          console.error('Error fetching sales summary:', summaryErr);
          return res.status(500).json({ message: 'Error fetching sales summary', error: summaryErr.message });
        }

        // Get sales by day
        const salesByDayQuery = `
          SELECT
            DATE(sale_date) AS date,
            SUM(total_amount) AS amount,
            COUNT(*) AS transactions
          FROM sales s
          WHERE sale_date BETWEEN ? AND ? ${branchFilter}
          GROUP BY DATE(sale_date)
          ORDER BY date
        `;

        con.query(salesByDayQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (byDayErr, salesByDay) => {
          if (byDayErr) {
            console.error('Error fetching sales by day:', byDayErr);
            return res.status(500).json({ message: 'Error fetching sales by day', error: byDayErr.message });
          }

          // Check if sales_details table exists
          const checkTableQuery = `
            SELECT COUNT(*) as table_exists
            FROM information_schema.tables
            WHERE table_schema = DATABASE()
            AND table_name = 'sales_details'
          `;

          con.query(checkTableQuery, (tableErr, tableResult) => {
            if (tableErr) {
              console.error('Error checking for sales_details table:', tableErr);
              return res.status(500).json({ message: 'Error checking database tables', error: tableErr.message });
            }

            // Default empty arrays for categories and products
            let topCategories = [];
            let topProducts = [];

            // If table doesn't exist, skip to recent sales
            if (!tableResult[0].table_exists) {
              console.log('sales_details table does not exist, using empty arrays for categories and products');
              getRecentSales();
            } else {
              // Get top selling categories
              const topCategoriesQuery = `
                SELECT
                  c.category_name,
                  SUM(sd.quantity) AS totalQuantity,
                  SUM(sd.price * sd.quantity) AS totalAmount
                FROM sales_details sd
                JOIN items i ON sd.item_id = i.item_id
                JOIN categories c ON i.category_id = c.category_id
                JOIN sales s ON sd.sale_id = s.sale_id
                WHERE s.sale_date BETWEEN ? AND ? ${branchFilter}
                GROUP BY c.category_id
                ORDER BY totalQuantity DESC
                LIMIT 5
              `;

              con.query(topCategoriesQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (categoriesErr, categoriesResult) => {
                if (categoriesErr) {
                  console.error('Error fetching top categories:', categoriesErr);
                  // Continue with empty categories
                  getTopProducts();
                } else {
                  topCategories = categoriesResult;
                  getTopProducts();
                }
              });
            }

            // Function to get top products
            function getTopProducts() {
              if (!tableResult[0].table_exists) {
                getRecentSales();
                return;
              }

              const topProductsQuery = `
                SELECT
                  i.item_name,
                  SUM(sd.quantity) AS totalQuantity,
                  SUM(sd.price * sd.quantity) AS totalAmount
                FROM sales_details sd
                JOIN items i ON sd.item_id = i.item_id
                JOIN sales s ON sd.sale_id = s.sale_id
                WHERE s.sale_date BETWEEN ? AND ? ${branchFilter}
                GROUP BY i.item_id
                ORDER BY totalQuantity DESC
                LIMIT 10
              `;

              con.query(topProductsQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (productsErr, productsResult) => {
                if (productsErr) {
                  console.error('Error fetching top products:', productsErr);
                  // Continue with empty products
                  getRecentSales();
                } else {
                  topProducts = productsResult;
                  getRecentSales();
                }
              });
            }

            // Function to get recent sales
            function getRecentSales() {
              const recentSalesQuery = `
                SELECT
                  s.sale_id,
                  s.customer_name,
                  s.total_amount,
                  s.payment_method,
                  s.sale_date,
                  s.user_id,
                  s.branch_id,
                  b.branch_name
                FROM sales s
                LEFT JOIN branches b ON s.branch_id = b.branch_id
                WHERE s.sale_date BETWEEN ? AND ? ${branchFilter}
                ORDER BY s.sale_date DESC
                LIMIT 20
              `;

              con.query(recentSalesQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (recentErr, recentSales) => {
                if (recentErr) {
                  console.error('Error fetching recent sales:', recentErr);
                  return res.status(500).json({ message: 'Error fetching recent sales', error: recentErr.message });
                }

                getPaymentMethods(recentSales);
              });
            }

            // Function to get payment methods
            function getPaymentMethods(recentSales) {
              const paymentMethodsQuery = `
                SELECT
                  payment_method,
                  COUNT(*) as count,
                  SUM(total_amount) as total
                FROM sales s
                WHERE sale_date BETWEEN ? AND ? ${branchFilter}
                GROUP BY payment_method
                ORDER BY total DESC
              `;

              con.query(paymentMethodsQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (paymentErr, paymentMethods) => {
                if (paymentErr) {
                  console.error('Error fetching payment methods:', paymentErr);
                  return res.status(500).json({ message: 'Error fetching payment methods', error: paymentErr.message });
                }

                getSalesByBranch(recentSales, paymentMethods);
              });
            }

            // Function to get sales by branch
            function getSalesByBranch(recentSales, paymentMethods) {
              const salesByBranchQuery = `
                SELECT
                  b.branch_id,
                  b.branch_name,
                  COUNT(s.sale_id) as transactions,
                  SUM(s.total_amount) as total
                FROM sales s
                JOIN branches b ON s.branch_id = b.branch_id
                WHERE s.sale_date BETWEEN ? AND ? ${branchFilter}
                GROUP BY b.branch_id
                ORDER BY total DESC
              `;

              con.query(salesByBranchQuery, [dateRange.startDate, dateRange.endDate, ...branchParams], (byBranchErr, salesByBranch) => {
                if (byBranchErr) {
                  console.error('Error fetching sales by branch:', byBranchErr);
                  return res.status(500).json({ message: 'Error fetching sales by branch', error: byBranchErr.message });
                }

                // Prepare and send response
                const response = {
                  period,
                  dateRange,
                  branches,
                  selectedBranch: branchId,
                  summary: salesResults[0] || { totalSales: 0, totalTransactions: 0, averageOrderValue: 0 },
                  salesByDay,
                  topCategories,
                  topProducts,
                  recentSales,
                  paymentMethods,
                  salesByBranch
                };

                res.status(200).json(response);
              });
            }
          });
        });
      });
    });
  } catch (error) {
    console.error('Error generating sales report:', error);
    res.status(500).json({ message: 'Error generating sales report', error: error.message });
  }
};

// Get inventory report data
export const getInventoryReport = (req, res) => {
  try {
    // Get total inventory stats
    const inventorySummaryQuery = `
      SELECT
        COUNT(*) AS totalItems,
        SUM(in_stock * selling_price) AS totalValue
      FROM jewellery_items
      WHERE in_stock > 0
    `;

    con.query(inventorySummaryQuery, (summaryErr, inventorySummary) => {
      if (summaryErr) {
        console.error('Error fetching inventory summary:', summaryErr);
        return res.status(500).json({ message: 'Error fetching inventory summary', error: summaryErr.message });
      }

      // Get low stock items (less than 10 in stock)
      const lowStockItemsQuery = `
        SELECT
          item_id,
          product_title AS item_name,
          in_stock AS quantity,
          selling_price AS unit_price,
          category AS category_name
        FROM jewellery_items
        WHERE in_stock < 10 AND in_stock > 0
        ORDER BY in_stock ASC
      `;

      con.query(lowStockItemsQuery, (lowStockErr, lowStockItems) => {
        if (lowStockErr) {
          console.error('Error fetching low stock items:', lowStockErr);
          return res.status(500).json({ message: 'Error fetching low stock items', error: lowStockErr.message });
        }

        // Get gold stock
        const goldStockQuery = `
          SELECT
            purity,
            SUM(quantity_in_grams) AS weight,
            AVG(price_per_gram) AS price_per_gram
          FROM gold_stock
          GROUP BY purity
          ORDER BY purity DESC
        `;

        con.query(goldStockQuery, (goldStockErr, goldStock) => {
          if (goldStockErr) {
            console.error('Error fetching gold stock:', goldStockErr);
            return res.status(500).json({ message: 'Error fetching gold stock', error: goldStockErr.message });
          }

          // Calculate value for each gold stock item
          const goldStockWithValue = goldStock.map(item => ({
            purity: item.purity,
            weight: parseFloat(item.weight) || 0,
            price_per_gram: parseFloat(item.price_per_gram) || 0,
            value: (parseFloat(item.weight) || 0) * (parseFloat(item.price_per_gram) || 0)
          }));

          // Get inventory by category
          const inventoryByCategoryQuery = `
            SELECT
              category AS category_name,
              COUNT(*) AS count,
              SUM(in_stock * selling_price) AS value
            FROM jewellery_items
            WHERE in_stock > 0
            GROUP BY category
            ORDER BY value DESC
          `;

          con.query(inventoryByCategoryQuery, (categoryErr, inventoryByCategory) => {
            if (categoryErr) {
              console.error('Error fetching inventory by category:', categoryErr);
              return res.status(500).json({ message: 'Error fetching inventory by category', error: categoryErr.message });
            }

            // Prepare response
            const response = {
              summary: inventorySummary[0] || { totalItems: 0, totalValue: 0 },
              lowStockItems,
              goldStock: {
                items: goldStockWithValue,
                total: goldStockWithValue.reduce((sum, item) => sum + item.weight, 0),
                totalValue: goldStockWithValue.reduce((sum, item) => sum + item.value, 0)
              },
              inventoryByCategory
            };

            res.status(200).json(response);
          });
        });
      });
    });
  } catch (error) {
    console.error('Error generating inventory report:', error);
    res.status(500).json({ message: 'Error generating inventory report', error: error.message });
  }
};

// Get current stock report (with branch filtering)
export const getCurrentStockReport = (req, res) => {
  try {
    const { branchId } = req.query;

    // Base WHERE clause for branch filtering
    const branchFilter = branchId ? 'AND ji.branch_id = ?' : '';
    const branchParams = branchId ? [branchId] : [];

    // Get all branches for the filter dropdown
    const branchesQuery = `SELECT branch_id, branch_name FROM branches ORDER BY branch_name`;

    con.query(branchesQuery, (branchErr, branches) => {
      if (branchErr) {
        console.error('Error fetching branches:', branchErr);
        return res.status(500).json({ message: 'Error fetching branches', error: branchErr.message });
      }

      // Get current stock items
      const currentStockQuery = `
        SELECT
          ji.item_id,
          ji.product_title AS item_name,
          ji.category,
          ji.in_stock AS quantity,
          ji.selling_price AS unit_price,
          ji.buying_price AS cost_price,
          ji.gold_carat,
          ji.weight,
          ji.branch_id,
          b.branch_name,
          (ji.in_stock * ji.selling_price) AS total_value
        FROM jewellery_items ji
        LEFT JOIN branches b ON ji.branch_id = b.branch_id
        WHERE ji.in_stock > 0 ${branchFilter}
        ORDER BY ji.category, ji.product_title
      `;

      con.query(currentStockQuery, [...branchParams], (stockErr, stockItems) => {
        if (stockErr) {
          console.error('Error fetching current stock:', stockErr);
          return res.status(500).json({ message: 'Error fetching current stock', error: stockErr.message });
        }

        // Get summary statistics
        const summaryQuery = `
          SELECT
            COUNT(*) AS totalItems,
            SUM(in_stock) AS totalQuantity,
            SUM(in_stock * selling_price) AS totalValue
          FROM jewellery_items ji
          WHERE in_stock > 0 ${branchFilter}
        `;

        con.query(summaryQuery, [...branchParams], (summaryErr, summary) => {
          if (summaryErr) {
            console.error('Error fetching summary:', summaryErr);
            return res.status(500).json({ message: 'Error fetching summary', error: summaryErr.message });
          }

          // Get category breakdown
          const categoryQuery = `
            SELECT
              category,
              COUNT(*) AS itemCount,
              SUM(in_stock) AS totalQuantity,
              SUM(in_stock * selling_price) AS totalValue
            FROM jewellery_items ji
            WHERE in_stock > 0 ${branchFilter}
            GROUP BY category
            ORDER BY totalValue DESC
          `;

          con.query(categoryQuery, [...branchParams], (categoryErr, categories) => {
            if (categoryErr) {
              console.error('Error fetching categories:', categoryErr);
              return res.status(500).json({ message: 'Error fetching categories', error: categoryErr.message });
            }

            // Prepare response
            const response = {
              branches,
              selectedBranch: branchId,
              summary: summary[0] || { totalItems: 0, totalQuantity: 0, totalValue: 0 },
              items: stockItems,
              categories
            };

            res.status(200).json(response);
          });
        });
      });
    });
  } catch (error) {
    console.error('Error generating current stock report:', error);
    res.status(500).json({ message: 'Error generating current stock report', error: error.message });
  }
};

// Get gold stock report (no branch filtering)
export const getGoldStockReport = (req, res) => {
  try {
    // Get gold stock
    const goldStockQuery = `
      SELECT
        purity,
        SUM(quantity_in_grams) AS weight,
        AVG(price_per_gram) AS price_per_gram,
        MAX(description) AS description,
        MAX(status) AS status
      FROM gold_stock
      GROUP BY purity
      ORDER BY purity DESC
    `;

    con.query(goldStockQuery, (goldStockErr, goldStock) => {
      if (goldStockErr) {
        console.error('Error fetching gold stock:', goldStockErr);
        return res.status(500).json({ message: 'Error fetching gold stock', error: goldStockErr.message });
      }

      // Calculate value for each gold stock item
      const goldStockWithValue = goldStock.map(item => ({
        purity: item.purity,
        weight: parseFloat(item.weight) || 0,
        price_per_gram: parseFloat(item.price_per_gram) || 0,
        value: (parseFloat(item.weight) || 0) * (parseFloat(item.price_per_gram) || 0),
        description: item.description,
        status: item.status
      }));

      // Get total gold weight and value
      const totalWeight = goldStockWithValue.reduce((sum, item) => sum + item.weight, 0);
      const totalValue = goldStockWithValue.reduce((sum, item) => sum + item.value, 0);

      // Get recent gold transactions
      const recentTransactionsQuery = `
        SELECT
          gs.stock_id,
          gs.purity,
          gs.quantity_in_grams,
          gs.price_per_gram,
          gs.last_updated,
          gs.description
        FROM gold_stock gs
        ORDER BY gs.last_updated DESC
        LIMIT 10
      `;

      con.query(recentTransactionsQuery, (transactionsErr, transactions) => {
        if (transactionsErr) {
          console.error('Error fetching recent gold transactions:', transactionsErr);
          return res.status(500).json({ message: 'Error fetching recent gold transactions', error: transactionsErr.message });
        }

        // Prepare response
        const response = {
          goldStock: goldStockWithValue,
          summary: {
            totalWeight,
            totalValue,
            averagePrice: totalWeight > 0 ? totalValue / totalWeight : 0
          },
          recentTransactions: transactions
        };

        res.status(200).json(response);
      });
    });
  } catch (error) {
    console.error('Error generating gold stock report:', error);
    res.status(500).json({ message: 'Error generating gold stock report', error: error.message });
  }
};

// Get low stock report (with branch filtering)
export const getLowStockReport = (req, res) => {
  try {
    const { branchId } = req.query;

    // Base WHERE clause for branch filtering
    const branchFilter = branchId ? 'AND ji.branch_id = ?' : '';
    const branchParams = branchId ? [branchId] : [];

    // Get all branches for the filter dropdown
    const branchesQuery = `SELECT branch_id, branch_name FROM branches ORDER BY branch_name`;

    con.query(branchesQuery, (branchErr, branches) => {
      if (branchErr) {
        console.error('Error fetching branches:', branchErr);
        return res.status(500).json({ message: 'Error fetching branches', error: branchErr.message });
      }

      // Get low stock items (less than 10 in stock)
      const lowStockQuery = `
        SELECT
          ji.item_id,
          ji.product_title AS item_name,
          ji.category,
          ji.in_stock AS quantity,
          ji.selling_price AS unit_price,
          ji.branch_id,
          b.branch_name
        FROM jewellery_items ji
        LEFT JOIN branches b ON ji.branch_id = b.branch_id
        WHERE ji.in_stock < 10 AND ji.in_stock > 0 ${branchFilter}
        ORDER BY ji.in_stock ASC, ji.category, ji.product_title
      `;

      con.query(lowStockQuery, [...branchParams], (stockErr, lowStockItems) => {
        if (stockErr) {
          console.error('Error fetching low stock items:', stockErr);
          return res.status(500).json({ message: 'Error fetching low stock items', error: stockErr.message });
        }

        // Get summary statistics
        const summaryQuery = `
          SELECT
            COUNT(*) AS totalLowStockItems,
            SUM(in_stock) AS totalQuantity,
            SUM(in_stock * selling_price) AS totalValue
          FROM jewellery_items ji
          WHERE in_stock < 10 AND in_stock > 0 ${branchFilter}
        `;

        con.query(summaryQuery, [...branchParams], (summaryErr, summary) => {
          if (summaryErr) {
            console.error('Error fetching summary:', summaryErr);
            return res.status(500).json({ message: 'Error fetching summary', error: summaryErr.message });
          }

          // Get category breakdown
          const categoryQuery = `
            SELECT
              category,
              COUNT(*) AS itemCount
            FROM jewellery_items ji
            WHERE in_stock < 10 AND in_stock > 0 ${branchFilter}
            GROUP BY category
            ORDER BY itemCount DESC
          `;

          con.query(categoryQuery, [...branchParams], (categoryErr, categories) => {
            if (categoryErr) {
              console.error('Error fetching categories:', categoryErr);
              return res.status(500).json({ message: 'Error fetching categories', error: categoryErr.message });
            }

            // Prepare response
            const response = {
              branches,
              selectedBranch: branchId,
              summary: summary[0] || { totalLowStockItems: 0, totalQuantity: 0, totalValue: 0 },
              items: lowStockItems,
              categories
            };

            res.status(200).json(response);
          });
        });
      });
    });
  } catch (error) {
    console.error('Error generating low stock report:', error);
    res.status(500).json({ message: 'Error generating low stock report', error: error.message });
  }
};

// Get inventory valuation report (with branch filtering)
export const getInventoryValuationReport = (req, res) => {
  try {
    const { branchId } = req.query;

    // Base WHERE clause for branch filtering
    const branchFilter = branchId ? 'AND ji.branch_id = ?' : '';
    const branchParams = branchId ? [branchId] : [];

    // Get all branches for the filter dropdown
    const branchesQuery = `SELECT branch_id, branch_name FROM branches ORDER BY branch_name`;

    con.query(branchesQuery, (branchErr, branches) => {
      if (branchErr) {
        console.error('Error fetching branches:', branchErr);
        return res.status(500).json({ message: 'Error fetching branches', error: branchErr.message });
      }

      // Get inventory valuation summary
      const valuationSummaryQuery = `
        SELECT
          COUNT(*) AS totalItems,
          SUM(in_stock) AS totalQuantity,
          SUM(in_stock * selling_price) AS totalSellingValue,
          SUM(in_stock * buying_price) AS totalCostValue,
          SUM(in_stock * (selling_price - buying_price)) AS totalPotentialProfit
        FROM jewellery_items ji
        WHERE ji.in_stock > 0 ${branchFilter}
      `;

      con.query(valuationSummaryQuery, [...branchParams], (summaryErr, summary) => {
        if (summaryErr) {
          console.error('Error fetching valuation summary:', summaryErr);
          return res.status(500).json({ message: 'Error fetching valuation summary', error: summaryErr.message });
        }

        // Get valuation by category
        const categoryValuationQuery = `
          SELECT
            category,
            COUNT(*) AS itemCount,
            SUM(in_stock) AS totalQuantity,
            SUM(in_stock * selling_price) AS totalSellingValue,
            SUM(in_stock * buying_price) AS totalCostValue,
            SUM(in_stock * (selling_price - buying_price)) AS totalPotentialProfit
          FROM jewellery_items ji
          WHERE ji.in_stock > 0 ${branchFilter}
          GROUP BY category
          ORDER BY totalSellingValue DESC
        `;

        con.query(categoryValuationQuery, [...branchParams], (categoryErr, categories) => {
          if (categoryErr) {
            console.error('Error fetching category valuation:', categoryErr);
            return res.status(500).json({ message: 'Error fetching category valuation', error: categoryErr.message });
          }

          // Get valuation by branch (if no branch filter)
          if (!branchId) {
            const branchValuationQuery = `
              SELECT
                b.branch_id,
                b.branch_name,
                COUNT(*) AS itemCount,
                SUM(ji.in_stock) AS totalQuantity,
                SUM(ji.in_stock * ji.selling_price) AS totalSellingValue,
                SUM(ji.in_stock * ji.buying_price) AS totalCostValue,
                SUM(ji.in_stock * (ji.selling_price - ji.buying_price)) AS totalPotentialProfit
              FROM jewellery_items ji
              JOIN branches b ON ji.branch_id = b.branch_id
              WHERE ji.in_stock > 0
              GROUP BY b.branch_id
              ORDER BY totalSellingValue DESC
            `;

            con.query(branchValuationQuery, (branchValErr, branchValuation) => {
              if (branchValErr) {
                console.error('Error fetching branch valuation:', branchValErr);
                return res.status(500).json({ message: 'Error fetching branch valuation', error: branchValErr.message });
              }

              // Prepare response
              const response = {
                branches,
                selectedBranch: branchId,
                summary: summary[0] || {
                  totalItems: 0,
                  totalQuantity: 0,
                  totalSellingValue: 0,
                  totalCostValue: 0,
                  totalPotentialProfit: 0
                },
                categories,
                branchValuation
              };

              res.status(200).json(response);
            });
          } else {
            // Prepare response without branch valuation
            const response = {
              branches,
              selectedBranch: branchId,
              summary: summary[0] || {
                totalItems: 0,
                totalQuantity: 0,
                totalSellingValue: 0,
                totalCostValue: 0,
                totalPotentialProfit: 0
              },
              categories,
              branchValuation: []
            };

            res.status(200).json(response);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error generating inventory valuation report:', error);
    res.status(500).json({ message: 'Error generating inventory valuation report', error: error.message });
  }
};

/**
 * Export report as CSV
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const exportReportCSV = async (req, res) => {
  try {
    const { reportType, branchId, format } = req.query;

    // Base WHERE clause for branch filtering
    const branchFilter = branchId ? 'AND ji.branch_id = ?' : '';
    const branchParams = branchId ? [branchId] : [];

    let data = [];
    let filename = `${reportType}_report_${new Date().toISOString().split('T')[0]}`;

    // Get data based on report type
    switch (reportType) {
      case 'current-stock':
        // Get current stock items
        const currentStockQuery = `
          SELECT
            ji.item_id,
            ji.product_title AS item_name,
            ji.category,
            ji.in_stock AS quantity,
            ji.selling_price AS unit_price,
            ji.buying_price AS cost_price,
            ji.gold_carat,
            ji.weight,
            b.branch_name
          FROM jewellery_items ji
          LEFT JOIN branches b ON ji.branch_id = b.branch_id
          WHERE ji.in_stock > 0 ${branchFilter}
          ORDER BY ji.category, ji.product_title
        `;

        const [currentStockItems] = await con.promise().query(currentStockQuery, [...branchParams]);
        data = currentStockItems;
        filename = `current_stock_report_${new Date().toISOString().split('T')[0]}`;
        break;

      case 'gold-stock':
        // Get gold stock
        const goldStockQuery = `
          SELECT
            purity,
            SUM(quantity_in_grams) AS weight,
            AVG(price_per_gram) AS price_per_gram,
            MAX(description) AS description,
            SUM(quantity_in_grams * price_per_gram) AS total_value
          FROM gold_stock
          GROUP BY purity
          ORDER BY purity DESC
        `;

        const [goldStockItems] = await con.promise().query(goldStockQuery);
        data = goldStockItems;
        filename = `gold_stock_report_${new Date().toISOString().split('T')[0]}`;
        break;

      case 'low-stock':
        // Get low stock items
        const lowStockQuery = `
          SELECT
            ji.item_id,
            ji.product_title AS item_name,
            ji.category,
            ji.in_stock AS quantity,
            ji.selling_price AS unit_price,
            b.branch_name
          FROM jewellery_items ji
          LEFT JOIN branches b ON ji.branch_id = b.branch_id
          WHERE ji.in_stock < 10 AND ji.in_stock > 0 ${branchFilter}
          ORDER BY ji.in_stock ASC, ji.category, ji.product_title
        `;

        const [lowStockItems] = await con.promise().query(lowStockQuery, [...branchParams]);
        data = lowStockItems;
        filename = `low_stock_report_${new Date().toISOString().split('T')[0]}`;
        break;

      case 'valuation':
        // Get inventory items with valuation
        const valuationQuery = `
          SELECT
            ji.item_id,
            ji.product_title AS item_name,
            ji.category,
            ji.in_stock AS quantity,
            ji.selling_price AS unit_price,
            ji.buying_price AS cost_price,
            (ji.selling_price - ji.buying_price) AS profit_margin,
            (ji.in_stock * ji.selling_price) AS total_value,
            b.branch_name
          FROM jewellery_items ji
          LEFT JOIN branches b ON ji.branch_id = b.branch_id
          WHERE ji.in_stock > 0 ${branchFilter}
          ORDER BY ji.category, ji.product_title
        `;

        const [valuationItems] = await con.promise().query(valuationQuery, [...branchParams]);
        data = valuationItems;
        filename = `inventory_valuation_report_${new Date().toISOString().split('T')[0]}`;
        break;

      case 'sales':
        // Get sales data
        const salesQuery = `
          SELECT
            s.sale_id,
            s.sale_date,
            s.total_amount,
            s.discount,
            s.payment_method,
            c.customer_name,
            b.branch_name,
            e.employee_name
          FROM sales s
          LEFT JOIN customers c ON s.customer_id = c.customer_id
          LEFT JOIN branches b ON s.branch_id = b.branch_id
          LEFT JOIN employees e ON s.employee_id = e.employee_id
          ORDER BY s.sale_date DESC
        `;

        const [salesItems] = await con.promise().query(salesQuery);
        data = salesItems;
        filename = `sales_report_${new Date().toISOString().split('T')[0]}`;
        break;

      default:
        return res.status(400).json({ message: 'Invalid report type' });
    }

    // If no data found
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No data found for the specified report type' });
    }

    // Generate CSV
    if (format === 'csv') {
      // Get headers from the first data item
      const headers = Object.keys(data[0]);

      // Create CSV content
      let csvContent = headers.join(',') + '\n';

      // Add data rows
      data.forEach(item => {
        const row = headers.map(header => {
          const value = item[header];
          // Handle values with commas by wrapping in quotes
          if (value === null || value === undefined) return '';
          if (typeof value === 'string' && value.includes(',')) {
            return `"${value}"`;
          }
          return value;
        }).join(',');
        csvContent += row + '\n';
      });

      // Set response headers for CSV download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}.csv`);

      // Send CSV content
      return res.send(csvContent);
    }

    // Generate JSON for PDF generation on client side
    return res.json({
      reportType,
      filename,
      data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error exporting report:', error);
    res.status(500).json({ message: 'Error exporting report', error: error.message });
  }
};
