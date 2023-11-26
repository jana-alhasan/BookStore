import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { Stack, Skeleton } from "@mui/material";
import BooksCarousels from "../../components/common/Carousels/Carousels";
import SideBookImg from "../../components/BookDetails/SideBookImg";
import CoverImg from "../../components/BookDetails/CoverImg";
import BookInfo from "../../components/BookDetails/BookInfo";
import MoreInfo from "../../components/BookDetails/MoreInfo";
import { fetchData } from "../../utilities/fetchData";
import { fetchBookDetails } from "../../utilities/fetchBookDetails";
import SkeletonLoader from "../../Skeleton/Skeleton";
import CoverImgSkeleton from "../../Skeleton/CoverImgSkeleton";
import BookInfoSkeleton from "../../Skeleton/BookInfoSkeleton";


const BookDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [relatedBook, setRelatedBook] = useState(null);
  const { bookId } = useParams();

  const bookItems = [
    { image: "/assets/images/book-slider/s3.png" },
    { image: "/assets/images/book-slider/s4.png" },
    { image: "/assets/images/book-slider/s2.png" },
    { image: "/assets/images/book-slider/s1.png" },
  ];
  const information = [
    { title: "Publisher", content: "Maragaret K. Books", id: "publisher" },
    { title: "Language", content: "English", id: "lang" },
    { title: "Print length", content: "592 pages", id: "length" },
    { title: "Publication date", content: "March 3, 2020", id: "date" },
    { title: "Reading age", content: "14+", id: "readingAge" },
    { title: "Dimensions", content: "6 x 1.8 x 9 inches", id: "dimensions" },
  ];

  const nonTitle="Title Not Found";
  const nonDescripton="Descripton Not Found";
  const nonAuthor="Author not Found";
  const nonImageURL="/assets/images/book-slider/prin-img.png";

  const getBookById = async () => {
    try {
      const books = await fetchBookDetails(bookId);

      if (books && books?.length > 0) {
        const matchingBooks = books.filter((book) => book.id === bookId);

        if (matchingBooks && matchingBooks?.length > 0) {
          const { volumeInfo } = matchingBooks[0] || [];
          const { title, authors, description, imageLinks } = volumeInfo || {};

          setRelatedBook({
            title: Array.isArray(title)
              ? title[0] || nonTitle
              : title?.toString() || nonTitle,
            authors:
              Array.isArray(authors) && authors.length > 0
                ? authors.join(",") || nonAuthor
                : authors?.toString() || nonAuthor,
            description: Array.isArray(description)
              ? description[0] ||nonDescripton
              : description?.toString() || nonDescripton,
            imageUrl: Array.isArray(imageLinks)
              ? imageLinks.thumbnail[0] || nonImageURL
              : imageLinks?.thumbnail?.toString() || nonImageURL,
          });
        } else {
          console.error(
            `No matching book found for the given bookId: ${bookId}`
          );
          setRelatedBook({title: nonTitle,
            authors: nonAuthor,
            description: nonDescripton,
            imageUrl: nonImageURL});
        }
      } else {
        console.error("No books found in the API response.");
        setRelatedBook({title: nonTitle,
          authors: nonAuthor,
          description: nonDescripton,
          imageUrl: nonImageURL});
      }
    } catch (error) {
      console.error("Error in fetchBookDetails:", error.message);
      setRelatedBook({title: nonTitle,
        authors: nonAuthor,
        description: nonDescripton,
        imageUrl: nonImageURL});
    }
  };

  const fetchRandomBook = async () => {
    try {
      setIsLoading(true);
      const fetchedBooks = await fetchData();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error in FetchData:", error);
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {   
    fetchRandomBook();
  }, []);

  useEffect(() => {
    getBookById();
  }, [bookId, setRelatedBook]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-between"} spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", sm: "row-reverse" }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={3}
              marginTop={2}
            >
              {isLoading ? (
                <>
                  <CoverImgSkeleton />
                  <SideBookImg bookItems={bookItems} />
                </>
              ) : (
                <>
                  <CoverImg imageUrl={relatedBook?.imageUrl} />
                  <SideBookImg bookItems={bookItems} />
                </>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            {isLoading ? (
              <BookInfoSkeleton />
            ) : (
              <>
                <BookInfo
                  title={relatedBook?.title}
                  authors={relatedBook?.authors}
                  description={relatedBook?.description}
                />
                <MoreInfo infoItems={information} />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
      <Stack>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <BooksCarousels carusalTitle={"Collection"} books={books} />
          </>
        )}
      </Stack>
    </>
  );
};

export default BookDetails;
