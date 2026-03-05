import { IMAGE_BASE_URL } from "../api/tmdb";
import useFavorites from "../hooks/useFavorites";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  const posterSrc = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigating if this was inside a Link
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 relative">
      <img
        src={posterSrc}
        alt={movie.title}
        loading="lazy"
        className="w-full h-[320px] object-cover"
      />

      {/* Heart Icon Container */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:bg-black/80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favorite ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={favorite ? "red" : "white"}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>

      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex justify-between text-gray-400 text-sm">
          <span>⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;