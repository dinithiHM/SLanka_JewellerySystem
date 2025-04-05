import express from 'express';
import con from '../utils/db.js';
import { fileURLToPath } from 'url';
import path from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get all sales with their items
router.get("/", (req, res) => {
  // Check if branch_id filter is provided
  const branchId = req.query.branch_id;
  const userId = req.query.user_id;

  let sql = `
    SELECT
      s.sale_id,
      s.customer_name,
      s.total_amount,
      s.payment_method,
      s.sale_date,
      i.invoice_number,
      s.user_id,
      u.first_name AS cashier_first_name,
      u.last_name AS cashier_last_name,
      s.branch_id,
      b.branch_name
    FROM
      sales s
    LEFT JOIN
      invoices i ON s.sale_id = i.sale_id
    LEFT JOIN
      users u ON s.user_id = u.user_id
    LEFT JOIN
      branches b ON s.branch_id = b.branch_id
  `;

  // Add WHERE clause if filters are provided
  const whereConditions = [];
  const queryParams = [];

  if (branchId) {
    whereConditions.push('s.branch_id = ?');
    queryParams.push(branchId);
  }

  if (userId) {
    whereConditions.push('s.user_id = ?');
    queryParams.push(userId);
  }

  if (whereConditions.length > 0) {
    sql += ' WHERE ' + whereConditions.join(' AND ');
  }

  sql += ' ORDER BY s.sale_date DESC';

  console.log('Executing SQL:', sql);
  console.log('With parameters:', queryParams);

  con.query(sql, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching sales:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results || []);
  });
});

// Get finance data (income and expenses) by period and branch
// Important: This route must be defined BEFORE the /:id route to avoid being caught by it
router.get("/finance", (req, res) => {
  console.log('GET /sales/finance - Fetching finance data');

  // Get query parameters
  const period = req.query.period || 'monthly'; // 'daily' or 'monthly'
  const branchId = req.query.branch_id; // Optional branch filter
  const year = req.query.year || new Date().getFullYear(); // Default to current year
  const month = req.query.month; // Optional month filter (1-12)

  console.log(`Fetching ${period} finance data for year: ${year}${month ? ', month: ' + month : ''}${branchId ? ', branch: ' + branchId : ''}`);

  let sql, groupBy;
  const queryParams = [];

  // Base query to get sales data
  let baseQuery;

  if (period === 'daily') {
    baseQuery = `
      SELECT
        DATE(s.sale_date) as date,
        s.branch_id,
        b.branch_name,
        SUM(s.total_amount) as income
      FROM
        sales s
      LEFT JOIN
        branches b ON s.branch_id = b.branch_id
    `;
  } else { // monthly
    baseQuery = `
      SELECT
        CONCAT(YEAR(s.sale_date), '-', LPAD(MONTH(s.sale_date), 2, '0')) as date,
        s.branch_id,
        b.branch_name,
        SUM(s.total_amount) as income
      FROM
        sales s
      LEFT JOIN
        branches b ON s.branch_id = b.branch_id
    `;
  }

  // WHERE clause conditions
  const whereConditions = [];

  // Add year condition
  whereConditions.push('YEAR(s.sale_date) = ?');
  queryParams.push(year);

  // Add month condition if provided
  if (month) {
    whereConditions.push('MONTH(s.sale_date) = ?');
    queryParams.push(month);
  }

  // Add branch condition if provided
  if (branchId) {
    whereConditions.push('s.branch_id = ?');
    queryParams.push(branchId);
  }

  // Add WHERE clause to base query
  if (whereConditions.length > 0) {
    baseQuery += ' WHERE ' + whereConditions.join(' AND ');
  }

  // Set GROUP BY based on period
  if (period === 'daily') {
    groupBy = 'date, s.branch_id, b.branch_name';
  } else { // monthly
    groupBy = 'date, s.branch_id, b.branch_name';
  }

  // Complete the query
  sql = `
    ${baseQuery}
    GROUP BY ${groupBy}
    ORDER BY date ASC
  `;

  console.log('Executing SQL:', sql);
  console.log('With parameters:', queryParams);

  con.query(sql, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching finance data:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // Process results to format for the chart
    const formattedData = processFinanceData(results, period, branchId);

    res.json(formattedData);
  });
});

// Get sale details by ID including items
router.get("/:id", (req, res) => {
  const saleId = req.params.id;

  // Get sale details
  const saleSql = `
    SELECT
      s.sale_id,
      s.customer_name,
      s.total_amount,
      s.payment_method,
      s.sale_date,
      i.invoice_number
    FROM
      sales s
    LEFT JOIN
      invoices i ON s.sale_id = i.sale_id
    WHERE
      s.sale_id = ?
  `;

  con.query(saleSql, [saleId], (err, saleResults) => {
    if (err) {
      console.error("Error fetching sale:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    if (saleResults.length === 0) {
      return res.status(404).json({ message: "Sale not found" });
    }

    const sale = saleResults[0];

    // Get sale items
    const itemsSql = `
      SELECT
        si.item_id,
        ji.product_title,
        ji.category,
        si.quantity,
        si.unit_price,
        si.subtotal
      FROM
        sale_items si
      LEFT JOIN
        jewellery_items ji ON si.item_id = ji.item_id
      WHERE
        si.sale_id = ?
    `;

    con.query(itemsSql, [saleId], (err, itemsResults) => {
      if (err) {
        console.error("Error fetching sale items:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }

      sale.items = itemsResults;
      res.json(sale);
    });
  });
});

// Create new sale with items and update inventory
router.post("/create", (req, res) => {
  const { customer_name, payment_method, items, user_id, branch_id } = req.body;

  console.log('Creating sale for customer:', customer_name);
  console.log('Payment method:', payment_method);
  console.log('Items:', JSON.stringify(items));
  console.log('User ID (Cashier):', user_id);
  console.log('Branch ID:', branch_id);

  // Basic validation
  if (!customer_name || !payment_method || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Calculate total amount
  const total_amount = items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);

  // Start a transaction
  con.beginTransaction(err => {
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }

    // Check if user_id and branch_id columns exist in the sales table
    con.query("SHOW COLUMNS FROM sales LIKE 'user_id'", (err, userIdColumns) => {
      if (err) {
        return con.rollback(() => {
          console.error("Error checking sales table structure:", err);
          res.status(500).json({ message: "Database error", error: err.message });
        });
      }

      con.query("SHOW COLUMNS FROM sales LIKE 'branch_id'", (err, branchIdColumns) => {
        if (err) {
          return con.rollback(() => {
            console.error("Error checking sales table structure:", err);
            res.status(500).json({ message: "Database error", error: err.message });
          });
        }

        // Determine if the columns exist
        const hasUserIdColumn = userIdColumns.length > 0;
        const hasBranchIdColumn = branchIdColumns.length > 0;

        console.log('Sales table has user_id column:', hasUserIdColumn);
        console.log('Sales table has branch_id column:', hasBranchIdColumn);

        // Construct SQL based on available columns
        let saleSql, saleParams;

        if (hasUserIdColumn && hasBranchIdColumn) {
          // Both columns exist, use them
          saleSql = "INSERT INTO sales (customer_name, total_amount, payment_method, user_id, branch_id) VALUES (?, ?, ?, ?, ?)";
          saleParams = [customer_name, total_amount, payment_method, user_id, branch_id];
        } else {
          // Columns don't exist, use original schema
          saleSql = "INSERT INTO sales (customer_name, total_amount, payment_method) VALUES (?, ?, ?)";
          saleParams = [customer_name, total_amount, payment_method];
        }

        // Insert sale
        con.query(saleSql, saleParams, (err, saleResult) => {
          if (err) {
            return con.rollback(() => {
              console.error("Error creating sale:", err);
              res.status(500).json({ message: "Database error", error: err.message });
            });
          }

          const saleId = saleResult.insertId;

          // Insert sale items and update inventory
          const insertItemPromises = items.map(item => {
            return new Promise((resolve, reject) => {
              // First check if the item exists in the jewellery_items table
              console.log('Checking if item exists:', item.item_id);
              con.query("SELECT * FROM jewellery_items WHERE item_id = ?", [item.item_id], (err, results) => {
                if (err) {
                  console.error('Error checking item existence:', err);
                  return reject(err);
                }

                if (results.length === 0) {
                  console.error('Item not found in jewellery_items table:', item.item_id);
                  return reject(new Error(`Item with ID ${item.item_id} does not exist in the database`));
                }

                console.log('Item found in database:', results[0]);

                // Insert sale item
                const subtotal = item.quantity * item.unit_price;
                const itemSql = "INSERT INTO sale_items (sale_id, item_id, quantity, unit_price, subtotal) VALUES (?, ?, ?, ?, ?)";
                con.query(itemSql, [saleId, item.item_id, item.quantity, item.unit_price, subtotal], (err) => {
                  if (err) {
                    return reject(err);
                  }

                  // Update inventory
                  const updateSql = "UPDATE jewellery_items SET in_stock = in_stock - ? WHERE item_id = ? AND in_stock >= ?";
                  con.query(updateSql, [item.quantity, item.item_id, item.quantity], (err, updateResult) => {
                    if (err) {
                      return reject(err);
                    }

                    if (updateResult.affectedRows === 0) {
                      return reject(new Error('Insufficient stock for item ID ' + item.item_id));
                    }

                    resolve();
                  });
                });
              });
            });
          });

          // Execute all item insertions and inventory updates
          Promise.all(insertItemPromises)
            .then(() => {
              // Generate invoice number
              const invoiceNumber = 'INV-' + new Date().getFullYear() + '-' + String(saleId).padStart(3, '0');
              const invoiceSql = "INSERT INTO invoices (sale_id, invoice_number) VALUES (?, ?)";

              con.query(invoiceSql, [saleId, invoiceNumber], (err) => {
                if (err) {
                  return con.rollback(() => {
                    console.error("Error creating invoice:", err);
                    res.status(500).json({ message: "Database error", error: err.message });
                  });
                }

                // Commit the transaction
                con.commit(err => {
                  if (err) {
                    return con.rollback(() => {
                      console.error("Error committing transaction:", err);
                      res.status(500).json({ message: "Database error", error: err.message });
                    });
                  }

                  console.log(`Sale created successfully with ID ${saleId}`);
                  res.status(201).json({
                    message: "Sale created successfully",
                    sale_id: saleId,
                    invoice_number: invoiceNumber
                  });
                });
              });
            })
            .catch(err => {
              con.rollback(() => {
                console.error("Error processing sale items:", err);
                res.status(500).json({ message: err.message });
              });
            });
        });
      });
    });
  });
});

// Simple test route
router.get("/test", (req, res) => {
  console.log('GET /sales/test - Test route');
  return res.json({ message: 'Sales router is working!' });
});

// Finance route moved to before the /:id route

// Helper function to process finance data for the chart
function processFinanceData(results, period, branchId) {
  // If no results, return sample data
  if (!results || results.length === 0) {
    return generateSampleFinanceData(period);
  }

  // Group data by date and branch
  const groupedData = {};
  const branches = new Set();

  results.forEach(row => {
    const date = new Date(row.date);
    let key;

    if (period === 'daily') {
      key = date.toISOString().split('T')[0]; // YYYY-MM-DD
    } else { // monthly
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; // YYYY-MM
    }

    if (!groupedData[key]) {
      groupedData[key] = {
        name: period === 'daily' ? key : getMonthName(date.getMonth()),
        date: key
      };
    }

    const branchKey = `branch_${row.branch_id}`;
    groupedData[key][branchKey] = row.income;
    branches.add(row.branch_id);

    // Add to total income
    groupedData[key].income = (groupedData[key].income || 0) + row.income;

    // Add branch name
    groupedData[key][`branch_${row.branch_id}_name`] = row.branch_name;
  });

  // Convert to array and sort by date
  const chartData = Object.values(groupedData).sort((a, b) => a.date.localeCompare(b.date));

  // Add expense data (for now, generate random expenses)
  chartData.forEach(item => {
    item.expense = Math.round(item.income * (0.4 + Math.random() * 0.3)); // 40-70% of income
  });

  return {
    chartData,
    branches: Array.from(branches).map(id => {
      const branchName = results.find(r => r.branch_id === id)?.branch_name || `Branch ${id}`;
      return { id, name: branchName };
    })
  };
}

// Helper function to get month name
function getMonthName(monthIndex) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
}

// Generate sample finance data for testing
function generateSampleFinanceData(period) {
  const chartData = [];
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  if (period === 'daily') {
    // Generate daily data for current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const income = Math.round(10000 + Math.random() * 15000);
      const expense = Math.round(income * (0.4 + Math.random() * 0.3));

      chartData.push({
        name: String(day),
        date,
        income,
        expense,
        branch_1: Math.round(income * 0.6),
        branch_2: Math.round(income * 0.4),
        branch_1_name: 'Mahiyangana Branch',
        branch_2_name: 'Mahaoya Branch'
      });
    }
  } else { // monthly
    // Generate monthly data for current year
    for (let month = 0; month < 12; month++) {
      const income = Math.round(300000 + Math.random() * 200000);
      const expense = Math.round(income * (0.4 + Math.random() * 0.3));

      chartData.push({
        name: getMonthName(month),
        date: `${currentYear}-${String(month + 1).padStart(2, '0')}`,
        income,
        expense,
        branch_1: Math.round(income * 0.6),
        branch_2: Math.round(income * 0.4),
        branch_1_name: 'Mahiyangana Branch',
        branch_2_name: 'Mahaoya Branch'
      });
    }
  }

  return {
    chartData,
    branches: [
      { id: 1, name: 'Mahiyangana Branch' },
      { id: 2, name: 'Mahaoya Branch' }
    ]
  };
}

// Get available jewellery items for sale
router.get("/available-items", (req, res) => {
  console.log('GET /sales/available-items - Fetching available items');

  // Directly query the jewellery_items table
  try {
    // Get all items for now to debug
    const sql = "SELECT item_id, product_title, category, in_stock, selling_price FROM jewellery_items";
    console.log('Executing SQL query:', sql);

    con.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching available items:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }

      console.log(`Found ${results ? results.length : 0} items in jewellery_items table`);
      if (results && results.length > 0) {
        console.log('First item found:', JSON.stringify(results[0]));
      } else {
        console.log('No items found in jewellery_items table');
      }

      return res.json(results || []);
    });
  } catch (error) {
    console.error('Unexpected error in /available-items route:', error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

export { router as salesRouter };
