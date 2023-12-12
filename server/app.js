const express = require('express');
const { Pool } = require('pg');
const config = require('./config');
const router = require('./routes');

const app = express();

app.set('port', 3210);

app.use(express.json());

app.use('/', router);

const pool = new Pool(config.database);

pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to PostgreSQL. Current timestamp:', result.rows[0].now);
  }
});

app.listen(3210, () => {
  console.log('Server is running on port 3210');
});
