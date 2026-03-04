import { IMAGE_BASE_URL } from "../api/tmdb";

const Hero = ({ movie }) => {
  if (!movie) return null;

  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-12 max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>

        <p className="text-gray-300 line-clamp-3">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default Hero;