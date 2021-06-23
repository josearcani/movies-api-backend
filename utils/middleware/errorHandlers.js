const boom = require('@hapi/boom');
const { config } = require('../../config');
// queremos el stack del error este en modo desarrollo o producción

// para agregar el stack de error
function withErrorStack(error, stack) {
  if (config.dev) {
    // el error trae mas información => error, statusCode
    return { ...error, stack }
    // en desarrollo regresamos el error y stack
  }
  return error
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

// es posible que el error que nos llegue no sea de tipo boom
// a partir de ahí todos lleven la estructura de boom
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    // badImplementation => manera genérica de marcar un error
    next(boom.badImplementation(err));
  }
  // si es de tipo boom
  next(err);
}

// por defecto express imprime los errores es en HTML
// es nuestar API lo mejor es JSON
// express determina un middleware cuando tiene 4 parámetros
function errorHandler(err, req, res, next) {
  const { output: { statusCode, payload} } = err;
  // determinar el estado del error si lo tiene  o un error de servidor 500
  res.status(statusCode || 500);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}