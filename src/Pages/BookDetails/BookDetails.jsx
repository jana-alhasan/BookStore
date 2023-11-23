import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import BooksCarousels from "../../components/common/BooksCarousels/BooksCarousels";
import SideBookImg from "../../components/BookDetails/SideBookImg";
import CoverImg from "../../components/BookDetails/CoverImg";
import BookInfo from "../../components/BookDetails/BookInfo";
import MoreInfo from "../../components/BookDetails/MoreInfo";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import { FetchData } from "../../utilities/FetchData";
import { fetchBookDetails } from "../../utilities/fetchBookDetails";
import {
  saveFavoritesToLocalStorage,
  getStoredFavorites,
} from "../../utilities/Favorite";
import SkeletonLoader from "../../Skeleton/Skeleton";

const BookDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const { favorites, setFavorites, isBookInFavorites, handleFavoriteClick } =
    useFavorites();

  useEffect(() => {
    const storedFavorites = getStoredFavorites();
    setFavorites(storedFavorites);
    FetchData(setIsLoading, setBooks);
  }, [setFavorites]);

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  useEffect(() => {
    FetchData(setIsLoading, setBooks);
  }, []);

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

  useEffect(() => {
    fetchBookDetails(bookId, setBook);
  }, [bookId]);

  if (!book) {
    return null;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-evenly"} spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", sm: "row-reverse" }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={4}
            >
              <CoverImg imageUrl={book.imageUrl} />
              <SideBookImg bookItems={bookItems} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <BookInfo
              title={book.title}
              authors={book.authors}
              description={book.description}
            />
            <MoreInfo infoItems={information} />
          </Grid>
        </Grid>
      </Container>
      <Stack>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <BooksCarousels
              carusalTitle={"Collection"}
              books={books}
              isBookInFavorites={isBookInFavorites}
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
          </>
        )}
      </Stack>
    </>
  );
};

export default BookDetails;
