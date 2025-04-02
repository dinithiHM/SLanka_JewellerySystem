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
  const sql = `
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
    ORDER BY 
      s.sale_date DESC
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching sales:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results || []);
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
      i.invoice_number,
      i.invoice_id
    FROM 
      sales s
    LEFT JOIN 
      invoices i ON s.sale_id = i.sale_id
    WHERE 
      s.sale_id = ?
  `;
  
  // Get sale items
  const itemsSql = `
    SELECT 
      si.sale_item_id,
      si.item_id,
      ji.product_title,
      ji.category,
      si.quantity,
      si.unit_price,
      si.subtotal
    FROM 
      sale_items si
    JOIN 
      jewellery_items ji ON si.item_id = ji.item_id
    WHERE 
      si.sale_id = ?
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
    
    con.query(itemsSql, [saleId], (err, itemResults) => {
      if (err) {
        console.error("Error fetching sale items:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      
      // Combine sale with its items
      sale.items = itemResults;
      
      res.json(sale);
    });
  });
});

// Create new sale with items and update inventory
router.post("/create", (req, res) => {
  const { customer_name, payment_method, items } = req.body;
  
  console.log('Creating sale for customer:', customer_name);
  console.log('Payment method:', payment_method);
  console.log('Items:', JSON.stringify(items));
  
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
    
    // Insert sale
    const saleSql = "INSERT INTO sales (customer_name, total_amount, payment_method) VALUES (?, ?, ?)";
    con.query(saleSql, [customer_name, total_amount, payment_method], (err, saleResult) => {
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
              
              res.status(201).json({
                message: "Sale created successfully",
                sale_id: saleId,
                invoice_number: invoiceNumber,
                total_amount
              });
            });
          });
        })
        .catch(err => {
          con.rollback(() => {
            console.error("Error processing sale items:", err);
            res.status(500).json({ message: err.message || "Error processing sale items" });
          });
        });
    });
  });
});

// Generate invoice for a sale
router.post("/generate-invoice/:id", (req, res) => {
  const saleId = req.params.id;
  
  // Check if invoice already exists
  const checkSql = "SELECT invoice_id FROM invoices WHERE sale_id = ?";
  con.query(checkSql, [saleId], (err, results) => {
    if (err) {
      console.error("Error checking invoice:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    if (results.length > 0) {
      return res.json({ 
        message: "Invoice already exists", 
        invoice_id: results[0].invoice_id 
      });
    }
    
    // Generate invoice number
    const invoiceNumber = 'INV-' + new Date().getFullYear() + '-' + String(saleId).padStart(3, '0');
    const invoiceSql = "INSERT INTO invoices (sale_id, invoice_number) VALUES (?, ?)";
    
    con.query(invoiceSql, [saleId, invoiceNumber], (err, result) => {
      if (err) {
        console.error("Error generating invoice:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      
      res.status(201).json({
        message: "Invoice generated successfully",
        invoice_id: result.insertId,
        invoice_number: invoiceNumber
      });
    });
  });
});

// Get available jewellery items for sale
router.get("/available-items", (req, res) => {
  console.log('GET /sales/available-items - Fetching available items');
  
  // First check if the jewellery_items table exists
  console.log('Checking if jewellery_items table exists...');
  con.query("SHOW TABLES LIKE 'jewellery_items'", (err, tables) => {
    if (err) {
      console.error("Error checking if jewellery_items table exists:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    
    if (tables.length === 0) {
      console.error("jewellery_items table does not exist");
      return res.status(404).json({ message: "jewellery_items table does not exist" });
    }
    
    // Table exists, now fetch the items
    console.log('jewellery_items table exists, fetching items...');
    // Get all items, not just those with in_stock > 0
    const sql = "SELECT item_id, product_title, category, in_stock, selling_price FROM jewellery_items";
    
    con.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching available items:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      
      console.log(`Found ${results ? results.length : 0} available items`);
      res.json(results || []);
    });
  });
});

export { router as salesRouter };
