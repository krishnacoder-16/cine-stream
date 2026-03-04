import axios from "axios";

const API_KEY = "2b4dbcb0792e3ce9fe0823730169ee19";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getTrendingMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const getTopRatedMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const getPopularMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};