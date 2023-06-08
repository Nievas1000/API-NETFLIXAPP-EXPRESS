const express = require("express");
const router = express.Router();
const moviesController = require("../movies/controllers/moviesController");

// Movies endpoints
router.route("/movie/popular").get(moviesController.getPopularMovies);
router.route("/movie/topRated").get(moviesController.getTopRatedMovies);
router.route("/movie/upcoming").get(moviesController.getUpcomingMovies);
router.route("/movies/genres").get(moviesController.getGenres);
router.route("/movie/videos/:id").get(moviesController.getVideosByMovie);
router.route("/movies/genre/:id").get(moviesController.getMoviesByGenre);
router.route("/movie/similar/:id").get(moviesController.getSimilarMovies);
router.route("/movie/search").get(moviesController.getMoviesByKeyword);
router.route("/trending").get(moviesController.getTrending);
router.route("/movie/:id").get(moviesController.getMovieById);

module.exports = router;
