/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import BookCard from "../../components/BookCard/BookCard";
import useStyles from "./styles";

const SearchPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { results } = location.state || { results: [] };
  const { favorites, isBookInFavorites, handleFavoriteClick } = useFavorites();
  

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={5} className={classes.searchContainer}>
        {results.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard
              book={book}
              isBookInFavorites={isBookInFavorites}
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchPage;
