import React from "react";

import useStyles from "./styles";
import { Stack } from "@mui/material";

const BookImage = () => {
  const classes = useStyles();
  return (
    <Stack sx={{ marginTop: { xs: "43px",sm: "43px", md: "0" } }}>
      <img
        src="../../assets/images/main-page/thumb.png"
        alt="Thumbnail"
        className={classes.BookImage}
      />
    </Stack>
  );
};

export default BookImage;
