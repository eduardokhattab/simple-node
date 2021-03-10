const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'abc123',
  database: 'agenda-petshop'
})

module.exports = connection;
