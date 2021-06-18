const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies.js');

// middleware
app.use(express.json());

moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})
