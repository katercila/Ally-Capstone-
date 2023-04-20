const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// create a connection to the database
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: "password",
    database: 'LoginSystem'
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// parse incoming requests with JSON payloads
app.use(bodyParser.json());

// handle registration requests
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const insertUser = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  const values = [username, email, password];
  
  connection.query(insertUser, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Registration failed!');
    } else {
      console.log(`User ${username} registered successfully!`);
      res.status(200).send('Registration successful!');
    }
  });
});

// handle login requests
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const checkLogin = `SELECT * FROM login WHERE username = ? AND password = ?`;
  const values = [username, password];
  
  connection.query(checkLogin, values, (err, result) => {
    if (err || result.length === 0) {
      console.error(err);
      res.status(401).send('Invalid username or password!');
    } else {
      console.log(`User ${username} logged in successfully!`);
      res.status(200).send('Login successful!');
    }
  });
});

// start the server
app.listen(3000, () => {
  console.log(`Connected to backend!`);
});