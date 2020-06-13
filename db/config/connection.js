const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 8000,
  user: "root",
  password: "password",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("connection error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

modules.exports = connection;
