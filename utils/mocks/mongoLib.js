const sinon = require('sinon'); 
// crea stubs con propiedades para determinar si fueron llamados o no
// así probamos que los services llamo los métodos de las librerías
const { moviesMock, filteredMoviesMock } = require('./movies');

// creamos los stubs
const getAllStubs = sinon.stub(); // crea un stub
// .withArgs => método stub para con ciertos argumemntos tener cierta respuesta
getAllStubs.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ["Drama"] } }
getAllStubs.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStubs(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data)
  }
}

module.exports = {
  getAllStubs,
  createStub,
  MongoLibMock
}
