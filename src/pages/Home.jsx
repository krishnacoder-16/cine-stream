import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-white text-3xl font-bold p-6">
        Popular Movies
      </h1>

      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;