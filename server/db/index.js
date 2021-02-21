// TODO: Establish connection to mysql database
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'pokedex'
})

connection.connect();

module.exports = connection;