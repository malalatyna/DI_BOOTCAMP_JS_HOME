const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3005;
const cors = require('cors');

const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST', 'PUT', 'DEL'],

  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOpts));

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hasina77X*",
  database: "registration",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.get("/lists_users", (request, response) => {
  connection.query("SELECT * FROM users", (error, data) => {
    if (error) {
      console.error(error);
      response.status(500).send("Error retrieving users");
    } else {
      response.send(data);
    }
  });
});


app.post('/lists_users', (request, response) => {
  const { name, email, postal_code } = request.body;
  connection.query(
    'INSERT INTO users (name, email, postal_code) VALUES (?, ?, ?)',
    [name, email, postal_code],
    (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating user');
      } else {
        response.send('User created successfully');
      }
    }
  );
});

app.delete('/lists_users/:id', (request, response) => {
  const { id } = request.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (error) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error deleting user');
    } else {
      response.send('User deleted successfully');
    }
  });
});
