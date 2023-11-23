// favoritesUtils.js

import { useState, useMemo } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const isBookInFavorites = useMemo(
    () => (book) => {
      return favorites.some((favorite) => favorite.id === book.id);
    },
    [favorites]
  );

  const handleFavoriteClick = (book) => {
    const isAlreadyFavorite = isBookInFavorites(book);
    if (isAlreadyFavorite) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== book.id
      );
      setFavorites(updatedFavorites);
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
    }
  };


  return {
    favorites,
    setFavorites,
    isBookInFavorites,
    handleFavoriteClick,
  };
};
