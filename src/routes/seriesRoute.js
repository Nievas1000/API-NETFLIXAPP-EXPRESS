const express = require("express");
const router = express.Router();
const seriesController = require("../movies/controllers/seriesController");

router.route("/tv/popular").get(seriesController.getPopularSeries);
router.route("/tv/topRated").get(seriesController.getTopRatedSeries);
router.route("/tv/genres").get(seriesController.getGenres);
router.route("/tv/videos/:id").get(seriesController.getVideosBySeries);
router.route("/tv/genre/:id").get(seriesController.getSeriesByGenre);
router.route("/tv/similar/:id").get(seriesController.getSimilarSeries);
router.route("/tv/search").get(seriesController.getSeriesByKeyword);
router.route("/tv/:id").get(seriesController.getSerieById);

module.exports = router;
