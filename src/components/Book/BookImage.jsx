import React from "react";

import useStyles from "./styles";
import { Stack } from "@mui/material";

const BookImage = () => {
  const classes = useStyles();
  return (
    <img
      src="../../assets/images/main-page/thumb.png"
      alt="Thumbnail"
      className={classes.BookImage}
    />
  );
};

export default BookImage;
