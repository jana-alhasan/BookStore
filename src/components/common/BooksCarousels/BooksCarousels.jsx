import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import BookCard from "../../BookCard/BookCard";
import "./BooksCarousels.css";

const swiperSettings = {
  modules: [Navigation, Pagination, A11y],
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  breakpoints: {
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
};

const BooksCarousels = ({
  title,
  books = [],
  isBookInFavorites,
  handleFavoriteClick,
}) => (
  <Box className="books-carousel">
    <Typography component="h2" variant="h4" fontWeight={600} sx={{ mb: 3 }}>
      {title}
    </Typography>
    <Swiper {...swiperSettings}>
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <BookCard
            book={book}
            isBookInFavorites={isBookInFavorites}
            handleFavoriteClick={handleFavoriteClick}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default BooksCarousels;
