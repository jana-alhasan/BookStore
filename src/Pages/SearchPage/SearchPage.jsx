import React, { useEffect, useState } from "react";
import { Alert, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import BookCard from "../../components/BookCard/BookCard";
import { searchBooks } from "../../utilities/booksApi";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { isBookInFavorites, handleFavoriteClick } = useFavorites();

  useEffect(() => {
    let active = true;

    const loadResults = async () => {
      if (!query) {
        setResults([]);
        setError("");
        return;
      }

      setIsLoading(true);
      setError("");
      try {
        const books = await searchBooks(query, { maxResults: 20 });
        if (active) {
          setResults(books);
        }
      } catch {
        if (active) {
          setError("Search results could not be loaded. Please try again.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadResults();
    return () => {
      active = false;
    };
  }, [query]);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography component="h1" variant="h4" gutterBottom>
        {query ? `Search results for “${query}”` : "Search books"}
      </Typography>

      {!query && (
        <Typography color="text.secondary">
          Use the search field above to find books by title, author, or topic.
        </Typography>
      )}

      {isLoading && (
        <Grid container spacing={3} aria-label="Loading search results">
          {[0, 1, 2, 3].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Skeleton variant="rounded" height={360} />
            </Grid>
          ))}
        </Grid>
      )}

      {!isLoading && error && <Alert severity="error">{error}</Alert>}

      {!isLoading && !error && query && results.length === 0 && (
        <Stack py={6} alignItems="center">
          <Typography>No books matched this search.</Typography>
        </Stack>
      )}

      {!isLoading && !error && results.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {results.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard
                book={book}
                isBookInFavorites={isBookInFavorites}
                handleFavoriteClick={handleFavoriteClick}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchPage;
