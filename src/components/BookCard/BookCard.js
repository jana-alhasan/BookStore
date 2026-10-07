import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const fallbackCover =
  "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

const BookCard = ({ book, isBookInFavorites, handleFavoriteClick }) => {
  const navigate = useNavigate();
  const volumeInfo = book?.volumeInfo || {};
  const saleInfo = book?.saleInfo || {};
  const price = saleInfo.retailPrice || saleInfo.listPrice;
  const isFavorite = isBookInFavorites(book);

  const handleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleFavoriteClick(book);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea
        onClick={() => navigate(`/BookDetails/${book.id}`)}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}
      >
        <CardMedia
          component="img"
          height="280"
          alt={`${volumeInfo.title || "Book"} cover`}
          image={volumeInfo.imageLinks?.thumbnail || fallbackCover}
          sx={{ objectFit: "contain", p: 2, bgcolor: "grey.50" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {volumeInfo.title || "Untitled book"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {volumeInfo.authors?.join(", ") || "Author not listed"}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" fontWeight={600}>
              {price
                ? `${price.amount} ${price.currencyCode || ""}`.trim()
                : "Price not listed"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <Stack direction="row" justifyContent="flex-end" sx={{ px: 1, pb: 1 }}>
        <IconButton
          onClick={handleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Stack>
    </Card>
  );
};

export default BookCard;
