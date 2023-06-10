const { default: axios } = require("axios");
require("dotenv").config();

exports.getSerieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPopularSeries = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTopRatedSeries = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getVideosBySeries = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSeriesByGenre = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSimilarSeries = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSeriesByKeyword = async (keyword) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&query=${keyword}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getActorsBySerie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.API_KEY}`
    );
    return response.data.cast.slice(0, 3);
  } catch (error) {
    throw new Error(error);
  }
};
