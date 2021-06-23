const boom = require('@hapi/boom');

// no recibe next ya que para que funcione debe ir al final de las rutas
// se ejecuta cuando ya pasó por todas las rutas
function notFoundHandler(req, res) {
  const { output: { statusCode, payload }} = boom.notFound();
  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;

