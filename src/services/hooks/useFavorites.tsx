import { useEffect, useState } from "react";
import { movie } from "../../constants/movieType";

function useFavorites() {
    const [favorites, setFavorites] = useState<movie[]>(() => {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
      });
      useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }, [favorites]);
  
      const isFavorite = (movie: movie) => {
        return favorites.some(favorite => favorite.id === movie.id);
      };
      const addToFavorites = (movie: movie) => {
        if (!isFavorite(movie)) {
          let favoritesArray: movie[] = favorites.slice()
          favoritesArray.push(movie)
          setFavorites(favoritesArray);
      }
      };
      const removeFromFavorites = (movieToRemove: movie) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieToRemove.id));
      };
      return { favorites, addToFavorites, removeFromFavorites, isFavorite };
  }

export default useFavorites