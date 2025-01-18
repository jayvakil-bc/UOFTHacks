// server.js
import express from 'express';
const app = express();
const PORT = 3000;
import { analyzeFeasibility } from './analysis.js';

// Middleware
app.use(express.json()); // For parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// POST Route - receiving form data
app.post('/form-submit', async (req, res) => {
    const { restaurant_type, team_size, budget, price_point, lat,long } = req.body;
    if (!restaurant_type || !team_size || !budget || !price_point || !lat || !long) {
      return res.status(400).send('Name and email are required.');
    }
    // Respond with the received data
    try {
      // Call the analyzeFeasibility function
      const result = await analyzeFeasibility({ restaurant_type, team_size, budget, price_point, lat, long });

      // Respond with the analysis result
      res.status(200).json({
          message: 'Feasibility analysis completed successfully!',
          result,
      });
      } catch (error) {
      console.error('Error in /form-submit:', error);
      res.status(500).send('An error occurred while analyzing feasibility.');
  }
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
