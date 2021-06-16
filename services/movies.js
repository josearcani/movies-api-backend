const MongoLib = require('../lib/mongo');
// esta capa es el corazón de la aplicación, desde aqui serviremos los mocks

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }
  // el query es de los tags, juntar películas por tags
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags }};
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createdMovieId = await this.mongoDB.create(this.collection, movie);
    return createdMovieId || {};
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return updatedMovieId;
  }

  async patchMovie() {
    const patchedMovie = await Promise.resolve(moviesMock[0].title);
    return patchedMovie;
  }

  async deleteMovie({ movieId }) {
    const deletedMovie = await this.mongoDB.delete(this.collection, movieId)
    return deletedMovie;
  }
}

module.exports = MoviesService;