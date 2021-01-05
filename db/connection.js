const mysql = require('mysql2');   



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    password: 'Romans828@5',
    database: 'employee'
  });



  module.exports = connection;