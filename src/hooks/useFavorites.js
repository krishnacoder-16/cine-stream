import { useFavoritesContext } from "../context/FavoritesContext";

const useFavorites = () => {
    return useFavoritesContext();
};

export default useFavorites;
