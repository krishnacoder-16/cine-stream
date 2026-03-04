import { IMAGE_BASE_URL } from "../api/tmdb";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
      
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
        className="w-full"
      />

      <div className="p-3 text-white">
        <h3 className="text-lg font-semibold">{movie.title}</h3>

        <p className="text-sm text-gray-400">
          {movie.release_date?.split("-")[0]} | ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;