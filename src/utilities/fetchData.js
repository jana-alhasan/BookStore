/* eslint-disable no-undef */
export const fetchData = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BOOKS_API
      }?q=travel&filter=paid-ebooks&startIndex=0&maxResults=5`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (
      data &&
      data?.items &&
      data?.items?.length>0 &&
      Array.isArray(data.items) &&
      data?.items?.every((item) => item && item.id && item.volumeInfo)
    ) {
      return data.items;
    } else {
      console.error("Invalid data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
