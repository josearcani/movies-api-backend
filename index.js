const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies.js');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');
// middleware body parser
app.use(express.json());

moviesApi(app);

// los middleware de error siempre deben ir al final de las rutas
// las rutas también son middlewares
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})
