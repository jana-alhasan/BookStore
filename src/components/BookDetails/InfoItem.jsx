/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@mui/material";
import useStyles from "./styles";

const InfoItem = ({ title, content, id }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.infoTitle}>
      {title} :{" "}
      <span className={classes.infoContent} id={id}>
        {content}
      </span>
    </Typography>
  );
};

export default InfoItem;