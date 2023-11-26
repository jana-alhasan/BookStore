/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./styles";

const CoverImg = ({ imageUrl }) => {
  const classes = useStyles();
  return <img src={imageUrl} className={classes.coverImage} alt="Book Cover" />;
};

export default CoverImg;
