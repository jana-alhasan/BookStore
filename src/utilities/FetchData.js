/* eslint-disable no-undef */
export const FetchData = async ( setIsLoading,  setBooks) => {
  const booksPerRow = 4;
  const booksPerPage = booksPerRow * 2;
  let currentPage = 0;

  try {
    const response = await fetch(
      `${
        process.env.REACT_APP_BOOKS_API
      }?q=travel&filter=paid-ebooks&startIndex=${
        currentPage * booksPerPage
      }&maxResults=5`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const fetchedBooks = data.items || [];
    setBooks(fetchedBooks);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};
