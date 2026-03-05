import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="bg-black min-h-screen pb-10">
            <Navbar />

            <h2 className="text-white text-3xl font-bold px-10 mt-6">
                My Favorites
            </h2>

            {favorites.length > 0 ? (
                <MovieGrid movies={favorites} />
            ) : (
                <div className="flex flex-col items-center justify-center mt-20">
                    <p className="text-gray-400 text-xl">You have no favorite movies yet.</p>
                    <p className="text-gray-500 mt-2">Click the heart icon on a movie to add it to your list.</p>
                </div>
            )}
        </div>
    );
};

export default Favorites;
