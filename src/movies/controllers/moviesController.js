const moviesServices = require("../services/moviesService");

exports.getMovieById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await moviesServices.getMovieById(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getPopularMovies = async (req, res) => {
  try {
    const response = await moviesServices.getPopularMovies();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getTopRatedMovies = async (req, res) => {
  try {
    const response = await moviesServices.getTopRatedMovies();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getUpcomingMovies = async (req, res) => {
  try {
    const response = await moviesServices.getUpcomingMovies();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getVideosByMovie = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await moviesServices.getVideosByMovie(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getGenres = async (req, res) => {
  try {
    const response = await moviesServices.getGenres();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getMoviesByGenre = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await moviesServices.getMoviesByGenre(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getSimilarMovies = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await moviesServices.getSimilarMovies(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getMoviesByKeyword = async (req, res) => {
  const keyword = req.query.keyword;
  const page = req.query.page;
  try {
    const response = await moviesServices.getMoviesByKeyword(keyword, page);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getTrending = async (req, res) => {
  try {
    const response = await moviesServices.getTrending();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};

exports.getActorsByMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await moviesServices.getActorsByMovie(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: new Error(error) });
  }
};
