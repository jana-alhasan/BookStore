/* eslint-disable no-undef */
import axios from "axios";


export const searches = async (debouncedSearchTerm, setResult, navigate) => {
  try {
    const respond = await axios.get(process.env.REACT_APP_BOOKS_API, {
      params: {
        q: debouncedSearchTerm,
        maxResults: 10,
      },
    });
    if (
      respond &&
      respond?.data &&
      respond?.data?.items &&
      respond?.data?.items?.length > 0 &&
      Array.isArray(respond.data.items) &&
      respond?.data?.items?.every((item) => item && item.id && item.volumeInfo)
    ) {
      const results = respond?.data?.items || [];
      setResult(results);
      navigate("/search", { state: { results } });
    } else {
      console.error("Invalid data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching book details from API:", error.message);
    return [];
  }

};











