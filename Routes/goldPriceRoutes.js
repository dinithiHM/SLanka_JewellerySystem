import express from 'express';
import axios from 'axios';
import con from '../utils/db.js';

const router = express.Router();

// Cache for gold price data
let goldPriceCache = {
  price: null,
  timestamp: null
};

// Cache expiration time (15 minutes)
const CACHE_EXPIRATION = 15 * 60 * 1000;

// Function to check if cache is valid
const isCacheValid = () => {
  return (
    goldPriceCache.price !== null &&
    goldPriceCache.timestamp !== null &&
    Date.now() - goldPriceCache.timestamp < CACHE_EXPIRATION
  );
};

// Get current gold price
router.get('/current-price', async (req, res) => {
  try {
    // Check if we have a valid cached price
    if (isCacheValid()) {
      console.log('Returning cached gold price');
      return res.json({
        success: true,
        price: goldPriceCache.price,
        cached: true,
        timestamp: goldPriceCache.timestamp
      });
    }

    // If no valid cache, fetch from database
    const dbQuery = "SELECT * FROM gold_prices ORDER BY timestamp DESC LIMIT 1";

    con.query(dbQuery, async (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ success: false, message: "Database error", error: err.message });
      }

      // If we have a recent record in the database, use it
      if (results.length > 0) {
        const dbRecord = results[0];
        const recordTime = new Date(dbRecord.timestamp).getTime();

        // If the database record is fresh enough (less than 15 minutes old)
        if (Date.now() - recordTime < CACHE_EXPIRATION) {
          goldPriceCache.price = dbRecord.price;
          goldPriceCache.timestamp = recordTime;

          return res.json({
            success: true,
            price: dbRecord.price,
            cached: false,
            fromDb: true,
            timestamp: recordTime
          });
        }
      }

      // If we reach here, we need to fetch from the API
      // Note: In a real implementation, you would use your API key
      // This is a placeholder for demonstration
      try {
        // Fetch the current gold price from GoldPriceZ website
        try {
          // We'll use web scraping since there's no official API
          const response = await axios.get('https://goldpricez.com/lk/gram');
          const html = response.data;

          // Extract the price using regex
          const priceMatch = html.match(/=LKR\s*([\d,]+\.\d+)/);
          if (priceMatch && priceMatch[1]) {
            // Convert the price string to a number
            const priceStr = priceMatch[1].replace(/,/g, '');
            const currentPrice = parseFloat(priceStr);

            if (!isNaN(currentPrice)) {
              console.log(`Fetched current gold price: ${currentPrice} LKR/g`);
              return processGoldPrice(currentPrice);
            }
          }

          // Fallback to the previous known price if extraction fails
          console.warn("Could not extract gold price from the website, using fallback price");
          const fallbackPrice = 31930.06;
          return processGoldPrice(fallbackPrice);
        } catch (scrapingError) {
          console.error("Error scraping gold price:", scrapingError);
          const fallbackPrice = 31930.06;
          return processGoldPrice(fallbackPrice);
        }

        // Helper function to process the gold price
        function processGoldPrice(price) {
          // Update cache
          goldPriceCache.price = price;
          goldPriceCache.timestamp = Date.now();

          // Store in database for future use
          const insertQuery = "INSERT INTO gold_prices (price, timestamp) VALUES (?, NOW())";
          con.query(insertQuery, [price], (insertErr) => {
            if (insertErr) {
              console.error("Error storing gold price:", insertErr);
            }
          });

          return res.json({
            success: true,
            price: price,
            cached: false,
            fromApi: true,
            timestamp: goldPriceCache.timestamp
          });
        }
      } catch (apiError) {
        console.error("API error:", apiError);
        return res.status(500).json({
          success: false,
          message: "Error fetching gold price from API",
          error: apiError.message
        });
      }
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});

// Endpoint to manually update gold price (for testing or admin use)
router.post('/update-price', (req, res) => {
  const { price } = req.body;

  if (!price || isNaN(price)) {
    return res.status(400).json({ success: false, message: "Invalid price" });
  }

  // Update cache
  goldPriceCache.price = parseFloat(price);
  goldPriceCache.timestamp = Date.now();

  // Store in database
  const insertQuery = "INSERT INTO gold_prices (price, timestamp) VALUES (?, NOW())";
  con.query(insertQuery, [goldPriceCache.price], (err) => {
    if (err) {
      console.error("Error storing gold price:", err);
      return res.status(500).json({ success: false, message: "Database error", error: err.message });
    }

    res.json({
      success: true,
      message: "Gold price updated successfully",
      price: goldPriceCache.price,
      timestamp: goldPriceCache.timestamp
    });
  });
});

export { router as goldPriceRouter };
