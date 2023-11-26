/* eslint-disable react/prop-types */
import React from "react";
import { Stack,Box } from "@mui/material";
import useStyles from "./styles";

const SideBookImg = ({ bookItems }) => {
  const classes = useStyles();
  return (
    <Stack direction={{ xs: "row", sm: "column" }} spacing={2} width={{xs:"100%" ,md:"40%"}} >
      {bookItems.map((book, index) => (
        <Box key={index} className={classes.bookItemDiv} >
          <img
            src={book.image}
            className={classes.bookItemImg}
            alt={`Book Cover ${index + 1}`}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default SideBookImg;
