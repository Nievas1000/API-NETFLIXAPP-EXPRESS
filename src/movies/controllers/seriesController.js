const seriesService = require("../services/seriesService");

exports.getSerieById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await seriesService.getSerieById(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getPopularSeries = async (req, res) => {
  try {
    const response = await seriesService.getPopularSeries();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getTopRatedSeries = async (req, res) => {
  try {
    const response = await seriesService.getTopRatedSeries();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getVideosBySeries = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await seriesService.getVideosBySeries(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getGenres = async (req, res) => {
  try {
    const response = await seriesService.getGenres();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getSeriesByGenre = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await seriesService.getSeriesByGenre(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getSimilarSeries = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await seriesService.getSimilarSeries(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getSeriesByKeyword = async (req, res) => {
  const keyword = req.body.keyword;
  try {
    const response = await seriesService.getSeriesByKeyword(keyword);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getActorsBySerie = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await seriesService.getActorsBySerie(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};
exports.getEpisodiesBySeason = async (req, res) => {
  const serieId = req.params.serieId;
  const seasonNumber = req.params.seasonNumber;
  try {
    const response = await seriesService.getEpisodiesBySeason(
      serieId,
      seasonNumber
    );
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
