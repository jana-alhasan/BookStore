const BOOKS_API =
  process.env.REACT_APP_BOOKS_API ||
  "https://www.googleapis.com/books/v1/volumes";

const requestJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Books API request failed with status ${response.status}`);
  }
  return response.json();
};

export const searchBooks = async (query, { maxResults = 12 } = {}) => {
  const normalizedQuery = query?.trim();
  if (!normalizedQuery) {
    return [];
  }

  const params = new URLSearchParams({
    q: normalizedQuery,
    maxResults: String(maxResults),
  });
  const data = await requestJson(`${BOOKS_API}?${params.toString()}`);
  return Array.isArray(data.items) ? data.items : [];
};

export const fetchFeaturedBooks = async () =>
  searchBooks("subject:fiction", { maxResults: 12 });

export const fetchBookById = async (bookId) => {
  if (!bookId) {
    throw new Error("A book id is required");
  }
  return requestJson(`${BOOKS_API}/${encodeURIComponent(bookId)}`);
};

export { BOOKS_API };
