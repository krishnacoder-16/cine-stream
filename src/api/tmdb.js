import axios from "axios";

const API_KEY = "2b4dbcb0792e3ce9fe0823730169ee19";

const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  return response.data.results;
};