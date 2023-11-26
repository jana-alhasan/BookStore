/* eslint-disable no-undef */
import axios from "axios";

export const fetchBookDetails = async (bookId) => {
  try {
    const response = await axios.get(process.env.REACT_APP_BOOKS_API, {
      params: {
        q: bookId,
      },
    });
    const data = response.data;
    if (
      data &&
      data?.items &&
      data?.items?.length > 0 &&
      Array.isArray(data.items) &&
      data?.items?.every((item) => item && item.id && item.volumeInfo)
    ) {
      return data.items;
    } else {
      console.error("Invalid data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching book details from API:", error.message);
    return [];
  }
};


