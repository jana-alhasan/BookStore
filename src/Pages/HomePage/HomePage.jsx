import React, { useEffect, useState } from "react";
import { Alert, Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import BooksCarousels from "../../components/common/BooksCarousels/BooksCarousels";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import { fetchFeaturedBooks } from "../../utilities/booksApi";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { isBookInFavorites, handleFavoriteClick } = useFavorites();

  useEffect(() => {
    let active = true;

    const loadBooks = async () => {
      setIsLoading(true);
      setError("");
      try {
        const result = await fetchFeaturedBooks();
        if (active) {
          setBooks(result);
        }
      } catch {
        if (active) {
          setError("Books could not be loaded right now. Please try again later.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadBooks();
    return () => {
      active = false;
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography component="h1" variant="h3" fontWeight={700}>
          Explore books
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          Browse public Google Books data, search the catalog, open book details,
          and save favorites locally in your browser.
        </Typography>
      </Stack>

      {isLoading && (
        <Stack spacing={2} aria-label="Loading books">
          <Skeleton variant="text" width={220} height={52} />
          <Skeleton variant="rounded" height={340} />
        </Stack>
      )}

      {!isLoading && error && <Alert severity="error">{error}</Alert>}

      {!isLoading && !error && books.length === 0 && (
        <Box py={6} textAlign="center">
          <Typography>No books were returned for this collection.</Typography>
        </Box>
      )}

      {!isLoading && !error && books.length > 0 && (
        <BooksCarousels
          title="Featured books"
          books={books}
          isBookInFavorites={isBookInFavorites}
          handleFavoriteClick={handleFavoriteClick}
        />
      )}
    </Container>
  );
};

export default HomePage;
