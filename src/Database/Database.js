const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

// create a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'UserLogin'
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// parse incoming requests with JSON payloads
app.use(bodyParser.json());

// handle login requests
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const checkLogin = `SELECT email, password, role FROM users WHERE email = ? AND password = ?`;

  const values = [email, password];

  connection.query(checkLogin, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
    } else {
      if (result.length === 0) {
        res.status(401).send('Invalid username or password!');
      } else {
        const { email, role } = result[0]; // Fetch email and role from the query result
        console.log(`User ${email} logged in successfully as ${role}!`);
        res.status(200).json({ email, role }); // Send email and role in the response
      }
    }
  });

});
//admin dashboard

app.get('/api/capstone', (req, res) => {
  const getUsers = `SELECT email, first_name, last_name, city, state, password, role FROM users`;

  connection.query(getUsers, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
    } else {
      res.status(200).json(result);
    }
  });
});

// start the server
app.listen(port, () => {
  console.log(`Connected to backend on port ${port}!`);
});