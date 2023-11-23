export const getStoredFavorites = () => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }
    return [];
  } catch (error) {
    console.error("Error parsing favorites from localStorage:", error);
    return [];
  }
};

export const saveFavoritesToLocalStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};