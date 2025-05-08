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
