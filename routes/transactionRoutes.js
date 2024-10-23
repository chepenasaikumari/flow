const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

// Route to get all transactions
router.get('/transactions', transactionController.getAllTransactions);

// Route to get a single transaction by ID
router.get('/transactions/:id', transactionController.getTransactionById);

// Route to create a new transaction
router.post('/transactions', transactionController.createTransaction);

// Route to update a transaction by ID
router.put('/transactions/:id', transactionController.updateTransaction);

// Route to delete a transaction by ID
router.delete('/transactions/:id', transactionController.deleteTransaction);

// Route to get summary of transactions with optional filters
router.get('/summary', transactionController.getSummary);

module.exports = router;
