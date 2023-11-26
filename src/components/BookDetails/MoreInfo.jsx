/* eslint-disable react/prop-types */
import React from "react";
import { Stack,Box} from "@mui/material";
import InfoItem from "./InfoItem";
import useStyles from "./styles";

const MoreInfo = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.MoreInfo} direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Box className={classes.MoreInfoItem}>
        <InfoItem title="Publisher: " content="Maragaret K. Books" id="publisher" />
        <InfoItem title="Language: " content="English" id="lang" />
        <InfoItem title="Print length: " content="592 pages" id="length" />
      </Box>
      <Box className={classes.MoreInfoItem}>
        <InfoItem title="Publication date:  " content="March 3, 2020" id="date" />
        <InfoItem title="Reading age:  " content="14+" id="readingAge" />
        <InfoItem title="Dimensions:  " content="6 x 1.8 x 9 inches" id="dimensions" />
      </Box>
    </Stack>
  );
};



export default MoreInfo;
