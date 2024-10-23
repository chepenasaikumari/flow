const db = require('../config/database');

// Model for retrieving categories
const Category = {
    getAll: (callback) => {
        db.all('SELECT * FROM categories', [], callback);
    },

    create: (category, callback) => {
        const { name, type } = category;
        db.run('INSERT INTO categories (name, type) VALUES (?, ?)', [name, type], callback);
    }
};

module.exports = Category;
