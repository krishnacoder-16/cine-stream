import { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        setFavorites((prev) => {
            if (!prev.some((f) => f.id === movie.id)) {
                return [...prev, movie];
            }
            return prev;
        });
    };

    const removeFavorite = (movieId) => {
        setFavorites((prev) => prev.filter((f) => f.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((f) => f.id === movieId);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
