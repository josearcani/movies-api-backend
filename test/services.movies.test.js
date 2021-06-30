const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStubs } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {
  // usamos la libreria mock en lugar de la de servicios
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock 
  });

  const moviesService = new MoviesService();

  describe('when get movies method is called', async function () {
    it('should call the get getAll MongoLib method', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStubs.called, true);
    });

    it('should return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    })
  });
});