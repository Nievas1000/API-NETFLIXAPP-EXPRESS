const express = require("express");
const router = express.Router();
const seriesController = require("../movies/controllers/seriesController");

router.route("/tv/serie/:id").get(seriesController.getSerieById);
router.route("/tv/popular").get(seriesController.getPopularSeries);
router.route("/tv/topRated").get(seriesController.getTopRatedSeries);
router.route("/tv/genres").get(seriesController.getGenres);
router.route("/tv/genre/:id").get(seriesController.getSeriesByGenre);
router.route("/tv/similar/:id").get(seriesController.getSimilarSeries);
router.route("/tv/search").get(seriesController.getSeriesByKeyword);

module.exports = router;
