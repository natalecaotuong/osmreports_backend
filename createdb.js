var sqlite = require('sqlite3');

var db = new sqlite.Database("users.sqlite3");

db.run(`CREATE TABLE users(
  user_id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
)`);

db.run(`CREATE TABLE user_report(
  report_id INTEGER FOREIGN KEY,
  user_id INTEGER FOREIGN KEY,
  duration DATE NOT NULL,
  vote INTEGER NOT NULL,
  description STRING NOT NULL,
)`);

db.run(`CREATE TABLE report(
  report_id INTEGER PRIMARY KEY,
  type STRING NOT NULL
)`);

db.close();
