const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("bulletinboard.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS flyers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        category TEXT,
        event_date TEXT,
        image_url TEXT,
        created_by INTEGER,
        FOREIGN KEY (created_by) REFERENCES users(id)
    );
`);

console.log("Database initialized successfully.");

module.exports = db;