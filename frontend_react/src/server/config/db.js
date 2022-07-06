const mysql = require('mysql')
const db = mysql.createConnection({
host: "10.0.47.217:3307",
user: "plinder",
password: "dR1]d5C_Zb",
database:"plinder" 
})

module.exports = db;