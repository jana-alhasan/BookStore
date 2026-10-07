const FAVORITES_KEY = "favorites";

export const getStoredFavorites = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsed = storedFavorites ? JSON.parse(storedFavorites) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveFavoritesToLocalStorage = (favorites) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(Array.isArray(favorites) ? favorites : [])
    );
  } catch {
    // Ignore storage failures and keep the in-memory UI usable.
  }
};
