/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Quantity from "./Quantity";
import Rating from "./rating";
import useStyles from "./styles";

const BookInfo = ({ title, authors, description }) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count+1);
    console.log(count);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log(count);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.author}>{authors}</Typography>
      <Rating />
      <Typography className={classes.price}>$12.45</Typography>
      <Typography className={classes.description}>{description}</Typography>
      <Box>
        <Quantity icon={<RemoveIcon />} onClick={handleDecrement} />
        <span className={classes.counter}>{count}</span>
        <Quantity icon={<AddIcon />} onClick={handleIncrement} />
      </Box>
      <Box className={classes.addCartFav}>
        <Button
          variant="contained"
          className={classes.cart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          className={classes.favorite}
          startIcon={<FavoriteIcon />}
        >
          Favorite
        </Button>
      </Box>
    </Box>
  );
};

export default BookInfo;
