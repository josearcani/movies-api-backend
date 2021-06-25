const assert = require('assert'); // verifica que la comparación de los test 
const proxyquire = require('proxyquire');
// cada require nos permite elegir un mock a un paquete real

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

// describe imprime en la consola
describe('routes - movies', function () {
  // ruta de pruebas
  // routes/movies usa servicios lo remplaza con MoviesServiceMock
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  // el test es específico para la ruta
  const request = testServer(route);

  describe('GET /movies', function () {
    it('should respond with statusCode 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        })
        done(); // le dice cuando debe finalizar el test
      })
    })
  })
})

