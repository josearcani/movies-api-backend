const express = require('express');

const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  // obtener todo ***Read***
  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      // const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  // obtener película específica ***Read***
  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movies = await moviesService.getMovie({ movieId });
      // const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movies,
        message: 'movie retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  // creación de las películas, regresamos el Id de la película ***Create***
  router.post('/', async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });
      // const createdMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  // actualización de una película ***Update***
  router.put('/:movieId', async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });

  // borrar una película ***Delete***
  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      });
    } catch (err) {
      next(err);
    }
  });

  // parchar una película ***Patch***
  router.patch('/:movieId', async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const patchedMovie = await moviesService.patchMovie({ movieId, movie });
      res.status(200).json({
        data: patchedMovie,
        message: 'movie patched'
      });
    } catch (err) {
      next(err);
    }
  });

}

module.exports = moviesApi;