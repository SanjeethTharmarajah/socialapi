const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());
app.use(bodyParser.json()); // Body parsing middleware

// Enable CORS for all routes (adjust origin as needed)
app.use(cors());

// Connect to MongoDB (adjust the connection string)
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Include route files
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts');
const reactionRoutes = require('./routes/reactions');
const friendRoutes = require('./routes/friends');

// Use the routes for their respective resources
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friends', friendRoutes);

// Handle errors globally (error handling middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the Express server (adjust the port as needed)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
