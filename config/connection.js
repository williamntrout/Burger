require("dotenv").config();
const mysql = require("mysql");

const local = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db",
};

const connection = mysql.createConnection(process.env.JAWSDB_URL || local);

connection.connect(function (err) {
  if (err) {
    console.error("connection error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
