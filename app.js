const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Transaction routes
app.use('/api', transactionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
