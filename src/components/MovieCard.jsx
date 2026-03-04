import { IMAGE_BASE_URL } from "../api/tmdb";

const MovieCard = ({ movie }) => {
  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  const posterSrc = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={posterSrc}
        alt={movie.title}
        loading="lazy"
        className="w-full h-[320px] object-cover"
      />

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