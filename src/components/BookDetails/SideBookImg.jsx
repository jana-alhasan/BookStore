/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "@mui/material";
import useStyles from "./styles";

const SideBookImg = ({ bookItems }) => {
  const classes = useStyles();
  return (
    <Stack  direction={{ xs: "row", sm: "column" }} spacing={5}  className={classes.bookItem}>
      {bookItems.map((book, index) => (
        <Stack key={index}  alignItems={"center"} className={classes.bookItemDiv}>
          <img
            src={book.image}
            className={classes.bookItemImg}
            alt={`Book Cover ${index + 1}`}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default SideBookImg;
