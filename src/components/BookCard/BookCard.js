/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import { ShoppingCart, Favorite, FavoriteBorder } from "@material-ui/icons";
import useStyles from "./styles";

const BookCard = ({ book, isBookInFavorites, handleFavoriteClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/BookDetails/${book.id}`);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        onClick={handleCardClick}
        component="img"
        height={414.575}
        alt={book.volumeInfo.title || "No Title"}
        image={
          book.volumeInfo.imageLinks?.thumbnail ||
          "../images/book-slider/prin-img.png"
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          variant="subtitle1"
          onClick={handleCardClick}
        >
          {book.volumeInfo.title || "No Title"}
        </Typography>
        <Typography
          className={classes.authors}
          variant="body2"
          color="text.secondary"
        >
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "No authors"}
        </Typography>
        <Box className={classes.priceContainer}>
          <Typography className={classes.price} variant="body2">
            22.45
          </Typography>
          {isBookInFavorites(book) ? (
            <Favorite
              onClick={() => handleFavoriteClick(book)}
              className={classes.fav}
            />
          ) : (
            <FavoriteBorder onClick={() => handleFavoriteClick(book)} />
          )}
        </Box>
        <Button variant="contained" className={classes.addButton}>
          <ShoppingCart />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
