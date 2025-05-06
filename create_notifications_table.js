import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3307,
  password: '123456',
  database: 'slanakajewel'
});

// Read SQL file
const sqlPath = path.join(__dirname, 'sql', 'notifications_table.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

// Execute SQL
con.query(sql, (err, result) => {
  if (err) {
    console.error('Error creating notifications table:', err);
    process.exit(1);
  }
  console.log('Notifications table created successfully');
  
  // Close the connection
  con.end();
});
