const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create and initialize SQLite database
const db = new sqlite3.Database(path.join(__dirname, '..', 'finance.db'), (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database.');
        
        // Create categories table
        db.run(`
            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                type TEXT NOT NULL CHECK(type IN ('income', 'expense'))
            )
        `);

        // Create transactions table
        db.run(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                type TEXT NOT NULL CHECK(type IN ('income', 'expense')),
                category INTEGER NOT NULL,
                amount REAL NOT NULL,
                date TEXT NOT NULL,
                description TEXT,
                FOREIGN KEY (category) REFERENCES categories(id)
            )
        `);
    }
});

module.exports = db;
