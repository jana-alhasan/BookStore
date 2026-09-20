/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Quantity from "./Quantity";
import Rating from "./rating";
import useStyles from "./styles";

const BookInfo = ({ title, authors, description }) => {
const classes = useStyles();
const [quantity, setQuantity] = useState(1);  

const handleIncrease = () => {                
  setQuantity((prev) => prev + 1);
};

const handleDecrease = () => {                 
  setQuantity((prev) => (prev > 1 ? prev - 1 : 1));   
};
  return (
    <Stack spacing={3}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.author}>{authors}</Typography>
      <Rating />
      <Typography className={classes.price}>$12.45</Typography>
      <Typography className={classes.description}>{description}</Typography>
      <Box>
        <Quantity icon={<RemoveIcon />} onClick={handleDecrease} />
        <span className={classes.counter}>{quantity}</span>
        <Quantity icon={<AddIcon />}  onClick={handleIncrease} />
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
    </Stack>
  );
};

export default BookInfo;
