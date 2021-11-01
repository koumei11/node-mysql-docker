const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

const handleRequest = (req, res) => {
  connection.query(
    'SELECT * FROM test',
    (error, results) => {
      console.log(results);
      if (results) {
        return res.json(results);
      } else {
        return res.send(error);
      }
    }
  )
}

module.exports = handleRequest;