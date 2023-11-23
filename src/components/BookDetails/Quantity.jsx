/* eslint-disable react/prop-types */
import React from "react";
import { IconButton } from "@material-ui/core";
import useStyles from "./styles";

const Quantity = ({ icon}) => {
  const classes = useStyles();
  return (
    <IconButton >
      {React.cloneElement(icon, { className: classes.iconButton })}
    </IconButton>
  );
};

export default Quantity;
