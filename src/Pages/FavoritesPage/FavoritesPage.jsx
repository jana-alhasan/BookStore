import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import BookCard from "../../components/BookCard/BookCard";
import { useFavorites } from "../../components/CustomHooks/useFavorite";

const FavoritesPage = () => {
  const { favorites, isBookInFavorites, handleFavoriteClick } = useFavorites();

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography component="h1" variant="h4" gutterBottom>
        Favorites
      </Typography>
      {favorites.length === 0 ? (
        <Stack py={6} alignItems="center">
          <Typography color="text.secondary">
            You have not saved any books yet.
          </Typography>
        </Stack>
      ) : (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {favorites.map((book) => (
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

export default FavoritesPage;
