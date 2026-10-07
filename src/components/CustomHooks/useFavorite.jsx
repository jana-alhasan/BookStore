import { useCallback, useEffect, useState } from "react";
import {
  getStoredFavorites,
  saveFavoritesToLocalStorage,
} from "../../utilities/Favorite";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getStoredFavorites);

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  const isBookInFavorites = useCallback(
    (book) => Boolean(book?.id) && favorites.some((favorite) => favorite.id === book.id),
    [favorites]
  );

  const handleFavoriteClick = useCallback((book) => {
    if (!book?.id) {
      return;
    }

    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === book.id
      );
      return alreadyFavorite
        ? currentFavorites.filter((favorite) => favorite.id !== book.id)
        : [...currentFavorites, book];
    });
  }, []);

  return {
    favorites,
    setFavorites,
    isBookInFavorites,
    handleFavoriteClick,
  };
};
