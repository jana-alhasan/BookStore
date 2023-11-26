/* eslint-disable react/prop-types */
import React from "react";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";

const Benifict = ({ icon, text, index }) => {
  const classes = useStyles();
  return (
    <Box  display={"flex"} direction={"row"} gap={2} justifyContent={"flex-start"} alignItems={"center"}>
      {icon}
      <Typography variant="body1" className={classes.choiceP}>
        {text}
      </Typography>
    </Box>
  );
};

export default Benifict;
