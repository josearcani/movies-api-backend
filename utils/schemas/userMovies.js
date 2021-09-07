const joi = require('@hapi/joi');

const { movieIdSchema } = require('./movies'); // format of the movies
const { userIdSchema } = require('./users'); // user format
const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/); // schema of user's movies

const createUserMovieSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema,
};

module.exports = {
  createUserMovieSchema,
  userMovieIdSchema,
}
