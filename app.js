const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple routes
app.get('/', (req, res) => {
  console.log("Index route")
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; background-color: #f0f0f0;">
        <h1>Hello AWS App Runner Updated! 🚀</h1>
        <p>Deployed on: ${new Date().toLocaleString()}</p>
        <div style="margin-top: 20px; color: #666;">
          <small>Simple demo app for AWS App Runner</small>
        </div>
      </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log("Health route")
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Random fun endpoints
app.get('/quote', (req, res) => {
  console.log("Quote route")
  const quotes = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Innovation distinguishes between a leader and a follower.",
    "Cloud computing is not just a technology, it's a way of thinking.",
    "Deploy often, learn faster!"
  ];

  res.json({
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
