const MongoLib = require('../lib/mongo');

class UserMoviesServices {
  constructor() {
    this.collection = 'user-movies';
    this.mongoDB = new MongoLib();
  }

  async getUserMovies ({ userId }) {
    // we must create a query
    const query = userId && { userId };
    const userMovies = await this.mongoDB.getAll(this.collection, query);
    return userMovies || []
  }

  async createUserMovies ({ userMovie }) {
    const createdUserMovieId = await this.mongoDB.create(this.collection, userMovie);
    return createdUserMovieId
  }

  async deleteUserMovie ({ userMovieId }) {
    const deletedUserMovieId = await this.mongoDB.delete(this.collection, userMovieId);
    return deletedUserMovieId
  }
}

module.exports = UserMoviesServices;
