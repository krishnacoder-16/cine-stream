import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="px-10 py-6">

      <div className="grid gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4">

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

    </div>
  );
};

export default MovieGrid;