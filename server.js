// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // For parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// POST Route - receiving form data
app.post('/form-submit', (req, res) => {
    const { restaurant_type, team_size, budget, price_point, location } = req.body;
    if (!restaurant_type || !team_size || !budget || !price_point || !location) {
      return res.status(400).send('Name and email are required.');
    }
    // Respond with the received data
    res.status(200).json({
        message: 'Received form data successfully!',
        data: {
            restaurant_type,
            team_size,
            budget,
            price_point,
            location
        }
    });
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});