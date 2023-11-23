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
    const results = respond.data.items || [];
    setResult(results);

    navigate("/search", { state: { results } });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};






