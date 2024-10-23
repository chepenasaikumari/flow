const Transaction = require('../models/transactionModel');

// Controller to handle transaction-related logic
const transactionController = {
    getAllTransactions: (req, res) => {
        Transaction.getAll((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ transactions: rows });
            }
        });
    },

    getTransactionById: (req, res) => {
        const { id } = req.params;
        Transaction.getById(id, (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!row) {
                res.status(404).json({ error: 'Transaction not found' });
            } else {
                res.json({ transaction: row });
            }
        });
    },

    createTransaction: (req, res) => {
        const transaction = req.body;
        Transaction.create(transaction, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Transaction added successfully!' });
            }
        });
    },

    updateTransaction: (req, res) => {
        const { id } = req.params;
        const transaction = req.body;
        Transaction.update(id, transaction, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Transaction updated successfully!' });
            }
        });
    },

    deleteTransaction: (req, res) => {
        const { id } = req.params;
        Transaction.delete(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Transaction deleted successfully!' });
            }
        });
    },

    getSummary: (req, res) => {
        const filters = {
            startDate: req.query.startDate,
            endDate: req.query.endDate,
            category: req.query.category
        };

        Transaction.getSummary(filters, (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ summary: row });
            }
        });
    }
};

module.exports = transactionController;
