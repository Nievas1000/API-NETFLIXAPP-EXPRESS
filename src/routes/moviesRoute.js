const express = require("express");
const router = express.Router();
const moviesController = require("../movies/controllers/moviesController");

// Movies endpoints
router.route("/movies/popular").get(moviesController.getPopularMovies);
router.route("/movies/topRated").get(moviesController.getTopRatedMovies);
router.route("/movies/upcoming").get(moviesController.getUpcomingMovies);
router.route("/movies/genres").get(moviesController.getGenres);
router.route("/movies/videos/:id").get(moviesController.getVideosByMovie);
router.route("/movies/genre/:id").get(moviesController.getMoviesByGenre);
router.route("/movies/similar/:id").get(moviesController.getSimilarMovies);
router.route("/movies/search").get(moviesController.getMoviesByKeyword);
router.route("/trending").get(moviesController.getTrending);
router.route("/movies/:id").get(moviesController.getMovieById);

module.exports = router;
