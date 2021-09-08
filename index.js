const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const debug = require('debug')('app:server');
// middleware body parser
app.use(express.json());
app.use(helmet());

// routes
moviesApi(app);
userMoviesApi(app);
authApi(app);

// catch 404
app.use(notFoundHandler);

// los middleware de error siempre deben ir al final de las rutas
// las rutas también son middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

debug('hello debug');

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
})
