const { default: axios } = require("axios");
require("dotenv").config();

exports.getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getVideosByMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMoviesByGenre = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSimilarMovies = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMoviesByKeyword = async (keyword, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getActorsByMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`
    );
    return response.data.cast.slice(0, 3);
  } catch (error) {
    throw new Error(error);
  }
};
