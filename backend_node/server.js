const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql'); 
require('dotenv').config();

const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB 
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
 
//add new user
app.post('/store-data',(req, res) => {
  let data = {name: req.body.name};
  let sql = "SELECT * FROM fx_origin";
  let query = conn.query(sql, data,(err, results) => {
    if(err) res.send(JSON.stringify({"status": 500, "error": err,}));
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
app.listen(3000, () => {
  console.log("Server running successfully on 3000");
});