import { useEffect, useState, useRef, useCallback } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import useDebounce from "../hooks/useDebounce";
import MoodMatcher from "../components/MoodMatcher";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedQuery = useDebounce(query, 500);

  // Reset state when query changes
  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
  }, [debouncedQuery]);

  // Fetch movies when query or page changes
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let data;
        if (debouncedQuery) {
          data = await searchMovies(debouncedQuery, page);
        } else {
          data = await getPopularMovies(page);
        }

        setMovies((prev) => {
          // If page 1, replace array. Otherwise, append.
          if (page === 1) return data.results;
          return [...prev, ...data.results];
        });

        setHasMore(data.page < data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedQuery, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleMoodSuggestion = (suggestedTitle) => {
    setQuery(suggestedTitle);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Infinite Scroll Observer
  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div className="bg-black min-h-screen pb-10">
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Mood Matcher AI Feature */}
      <div className="px-10 mt-6">
        <MoodMatcher onSuggestion={handleMoodSuggestion} />
      </div>

      {/* Page Title */}
      <h2 className="text-white text-3xl font-bold px-10 mt-6">
        {debouncedQuery ? `Search Results for "${debouncedQuery}"` : "Popular Movies"}
      </h2>

      {/* Content */}
      <MovieGrid movies={movies} />

      {/* Loading Indicator */}
      {loading && <Loader />}

      {/* Intersection Observer Sentinel */}
      {!loading && hasMore && (
        <div ref={lastElementRef} className="h-10 w-full" />
      )}

      {!hasMore && movies.length > 0 && (
        <p className="text-center text-gray-500 mt-8 mb-4">No more movies to load.</p>
      )}
    </div>
  );
};

export default Home;