import React from "react";
import { Box, Divider } from "@mui/material";
import useStyles from "./styles";

const Scoll = () => {
  const classes = useStyles();
  
  const dividers = Array.from({ length: 4 }, (_,index) => (
    <Divider key={index} orientation="vertical" sx={{ display: { xs: "none", md: "flex" }}} className={classes.dividers} />
  ));
  return <Box className={classes.dividersContainer}>{dividers}</Box>;
};

export default Scoll;
