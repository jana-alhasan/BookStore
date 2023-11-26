import React,{useState} from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

const Rating = () => {
  const classes = useStyles();
  const [ratingValue, setRatingValue] = useState(0);

  const handleStarClick = (index) => {
    setRatingValue(index + 1);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    ratingValue >= index + 1 ? (
      <StarIcon
        key={index}
        className={classes.selectedStar}
        onClick={() => handleStarClick(index)}
      />
    ) : (
      <StarBorderOutlinedIcon
        key={index}
        className={classes.unselectedStar}
        onClick={() => handleStarClick(index)}
      />
    )
  ));

  return (
    <Box className={classes.rating} id="rating">
      {stars}
      <span className={classes.rateNumber}>{ratingValue}</span>
    </Box>
  );
};

export default Rating;
