const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies.js');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const debug = require('debug')('app:server');
// middleware body parser
app.use(express.json());

// routes
moviesApi(app);

// catch 404
app.use(notFoundHandler);

// los middleware de error siempre deben ir al final de las rutas
// las rutas también son middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

debug('hello debug');

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})
