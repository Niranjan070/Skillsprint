const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./skillSprint.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create tables
const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS challenges (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    tags TEXT NOT NULL,
    description TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    challengeId INTEGER NOT NULL,
    solution TEXT NOT NULL,
    FOREIGN KEY (challengeId) REFERENCES challenges (id)
  )`);
};

createTables();

module.exports = db;
