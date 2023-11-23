import React, { Fragment } from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import useStyles from "./styles";

const BookInfo = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Stack
        spacing={3}
        alignItems={"flex-start"}
        className={classes.BookInfo}
  
      >
        <Box className={classes.augAuth}>
          <Typography className={classes.augPargh}>Author of augest</Typography>
        </Box>
        <Typography variant="h3" className={classes.headerBook}>
          Eric-Emanuel schmitt
        </Typography>
        <Typography className={classes.descriptionOfTheBook}>
          Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes
          and distinctions, and in 2001 he received the title of Chevalier des
          Arts et des Lettres. His books have been translated into over 40
          languages.
        </Typography>

        <Button variant="contained" className={classes.view}>
          view his boooks
        </Button>
      </Stack>
    </Fragment>
  );
};

export default BookInfo;
