import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import { fetchBookById } from "../../utilities/booksApi";

const fallbackCover =
  "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { isBookInFavorites, handleFavoriteClick } = useFavorites();

  useEffect(() => {
    let active = true;

    const loadBook = async () => {
      setIsLoading(true);
      setError("");
      try {
        const result = await fetchBookById(bookId);
        if (active) {
          setBook(result);
        }
      } catch {
        if (active) {
          setError("This book could not be loaded. Please return to the catalog and try again.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadBook();
    return () => {
      active = false;
    };
  }, [bookId]);

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rounded" height={480} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Skeleton variant="text" height={70} />
            <Skeleton variant="text" width="55%" />
            <Skeleton variant="rounded" height={260} sx={{ mt: 3 }} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (error || !book) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error || "Book not found."}
        </Alert>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}>
          Back to books
        </Button>
      </Container>
    );
  }

  const info = book.volumeInfo || {};
  const saleInfo = book.saleInfo || {};
  const price = saleInfo.retailPrice || saleInfo.listPrice;
  const isFavorite = isBookInFavorites(book);
  const metadata = [
    ["Publisher", info.publisher],
    ["Published", info.publishedDate],
    ["Pages", info.pageCount],
    ["Language", info.language?.toUpperCase()],
  ].filter(([, value]) => value !== undefined && value !== null && value !== "");

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Back to books
      </Button>

      <Grid container spacing={5} alignItems="flex-start">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={info.imageLinks?.large || info.imageLinks?.thumbnail || fallbackCover}
            alt={`${info.title || "Book"} cover`}
            sx={{ width: "100%", maxHeight: 560, objectFit: "contain", bgcolor: "grey.50" }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack spacing={2.5}>
            <Typography component="h1" variant="h3" fontWeight={700}>
              {info.title || "Untitled book"}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {info.authors?.join(", ") || "Author not listed"}
            </Typography>

            {Number(info.averageRating) > 0 && (
              <Stack direction="row" spacing={1} alignItems="center">
                <Rating value={Number(info.averageRating)} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {info.ratingsCount ? `${info.ratingsCount} ratings` : `${info.averageRating}/5`}
                </Typography>
              </Stack>
            )}

            <Typography variant="h6">
              {price
                ? `${price.amount} ${price.currencyCode || ""}`.trim()
                : "Price not listed by Google Books"}
            </Typography>

            <Button
              variant={isFavorite ? "contained" : "outlined"}
              color="secondary"
              startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={() => handleFavoriteClick(book)}
              sx={{ alignSelf: "flex-start" }}
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </Button>

            <Typography sx={{ lineHeight: 1.8 }}>
              {info.description || "No description is available for this volume."}
            </Typography>

            {info.categories?.length > 0 && (
              <Stack direction="row" gap={1} flexWrap="wrap">
                {info.categories.map((category) => (
                  <Chip key={category} label={category} size="small" />
                ))}
              </Stack>
            )}

            {metadata.length > 0 && (
              <Box component="dl" sx={{ display: "grid", gridTemplateColumns: "max-content 1fr", gap: 1.5, m: 0 }}>
                {metadata.map(([label, value]) => (
                  <React.Fragment key={label}>
                    <Typography component="dt" fontWeight={700}>
                      {label}
                    </Typography>
                    <Typography component="dd" sx={{ m: 0 }}>
                      {value}
                    </Typography>
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetails;
