/* eslint-disable react/prop-types */
import React from "react";
import { IconButton } from "@material-ui/core";
import useStyles from "./styles";

const Quantity = ({ icon,onClick}) => {
  const classes = useStyles();
  return (
    <IconButton onClick={onClick}>
      {React.cloneElement(icon, { className: classes.iconButton })}
    </IconButton>
  );
};

export default Quantity;
