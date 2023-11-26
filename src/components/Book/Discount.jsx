import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { LocalShipping, Star } from "@mui/icons-material";
import useStyles from "./styles";

const Discount = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.discount}
      sx={{ display: {xs: "none" ,sm: "none", md: "flex" } }}
    >
      Autographed <br />
      books + 30% <br />
      discount
    </Typography>
  );
};

export default Discount;
