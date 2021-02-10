/**
 * Name: Honours Dissertation Project (Server)
 *
 * Author: Thomas Scott (tscott202)
 *
 * Date Completed: 04/04/2020
 *
 * File Name: db.js
 *
 * Description: This page is used to set up the database connection.
 *
 */

const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("CANNOT CONNECT TO DB: " + process.env.HOST + " - ERROR INFO: " + err);
  } else {
    console.log("CONNECTED TO DB: " + process.env.HOST);
  }
});

module.exports = { connection };
