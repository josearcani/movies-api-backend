const { config } = require('../../config');
// queremos el stack del error este en modo desarrollo o producción

// para agregar el stack de error
function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack }
    // en desarrollo regresamos el error y stack
  }
  return error
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

// por defecto express imprime los errores es en HTML
// es nuestar API lo mejor es JSON
// express determina un middleware cuando tiene 4 parámetros
function errorHandler(err, req, res, next) {
  // determinar el estado del error si lo tiene  o un error de servidor 500
  res.status(err.status || 500);
  // respondemos con json
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler
}