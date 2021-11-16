const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "school",
});

app.get('/', (req, res) => {
    res.send('Hello. Add URL suffix "/students" to get student data from database');
  });

app.get("/students", (req, res) => {
  connection.query("SELECT * FROM Students", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});

app.listen(5000, () => console.log("listining on port 5000"));