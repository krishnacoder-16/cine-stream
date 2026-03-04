import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    setLoading(true);
    try {
      const data = await getPopularMovies();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) {
      loadPopularMovies();
      return;
    }

    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Page Title */}
      <h2 className="text-white text-3xl font-bold px-10 mt-6">
        Popular Movies
      </h2>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
};

export default Home;