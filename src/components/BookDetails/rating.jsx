import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

const Rating = () => {
  const classes = useStyles();
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} />
  ));

  return (
    <Box className={classes.rating} id="rating">
      {stars}
      <span className={classes.rateNumber}>4</span>
    </Box>
  );
};

export default Rating;
