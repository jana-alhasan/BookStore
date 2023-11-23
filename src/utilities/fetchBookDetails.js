/* eslint-disable no-undef */
import axios from "axios";

export const fetchBookDetails = async (bookId, setBook) => {
  try {
    const response = await axios.get(process.env.REACT_APP_BOOKS_API, {
      params: {
        q: bookId,
      },
    });

    if (response?.status === 200 && response?.data?.items?.length > 0) {
      const { title, authors, saleInfo, description, imageLinks } =
        response.data.items[0].volumeInfo;

      setBook({
        title: title || "Chain of Gold: The Last Hours #1",
        authors: authors ? authors.join(", ") : "No Authors",
        price:
          saleInfo && saleInfo.retailPrice
            ? `$${saleInfo.retailPrice.amount}`
            : "12.45$",
        description: description || "No Description Available",
        imageUrl: imageLinks
          ? imageLinks.thumbnail
          : "../images/book-slider/prin-img.png",
      });
    } else {
      console.error("Failed to fetch book details:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
