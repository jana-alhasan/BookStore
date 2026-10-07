import {
  getStoredFavorites,
  saveFavoritesToLocalStorage,
} from "./Favorite";

describe("favorite persistence", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("returns an empty list when nothing is stored", () => {
    expect(getStoredFavorites()).toEqual([]);
  });

  test("persists and reads favorite books", () => {
    const favorites = [{ id: "book-1", volumeInfo: { title: "React" } }];

    saveFavoritesToLocalStorage(favorites);

    expect(getStoredFavorites()).toEqual(favorites);
  });

  test("recovers safely from malformed stored JSON", () => {
    window.localStorage.setItem("favorites", "not-json");

    expect(getStoredFavorites()).toEqual([]);
  });
});
