const db = require('../config/database');

// Model for managing transactions
const Transaction = {
    getAll: (callback) => {
        db.all('SELECT * FROM transactions', [], callback);
    },

    getById: (id, callback) => {
        db.get('SELECT * FROM transactions WHERE id = ?', [id], callback);
    },

    create: (transaction, callback) => {
        const { type, category, amount, date, description } = transaction;
        db.run(`INSERT INTO transactions (type, category, amount, date, description) 
                VALUES (?, ?, ?, ?, ?)`, [type, category, amount, date, description], callback);
    },

    update: (id, transaction, callback) => {
        const { type, category, amount, date, description } = transaction;
        db.run(`UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? 
                WHERE id = ?`, [type, category, amount, date, description, id], callback);
    },

    delete: (id, callback) => {
        db.run('DELETE FROM transactions WHERE id = ?', [id], callback);
    },

    getSummary: (filters, callback) => {
        let query = `SELECT 
                        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS totalIncome, 
                        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS totalExpense, 
                        (SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) - SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)) AS balance 
                    FROM transactions`;

        const params = [];
        const conditions = [];

        if (filters.startDate && filters.endDate) {
            conditions.push("date BETWEEN ? AND ?");
            params.push(filters.startDate, filters.endDate);
        }

        if (filters.category) {
            conditions.push("category = ?");
            params.push(filters.category);
        }

        if (conditions.length > 0) {
            query += " WHERE " + conditions.join(" AND ");
        }

        db.get(query, params, callback);
    }
};

module.exports = Transaction;
