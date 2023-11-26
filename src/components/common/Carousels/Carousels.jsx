/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import BookCard from "../../BookCard/BookCard";
import "./Carousels.css";

const StyledBox = styled(Typography)`
  font-size: 2.3rem;
  font-weight: 500;
  margin: 6% 5% 3%;
`;

const swiperSettings = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  navigation: true,
  pagination: { clickable: true },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
};

const Carousels = ({ carusalTitle, books }) => {
  return (
    <Box className="myCarousal" sx={{ md: { margin: "0 0" } }}>
      <StyledBox>{carusalTitle}</StyledBox>
      <Swiper {...swiperSettings}>
        {books.length > 0 ? (
          books.map((item) => (
            <SwiperSlide key={item.id}>
              <BookCard
                book={item}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No books found</p>
        )}
      </Swiper>
    </Box>
  );
};

export default Carousels;
