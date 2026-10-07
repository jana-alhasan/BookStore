import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchInput from "./SearchInput";

const Header = () => (
  <AppBar position="sticky" color="inherit" elevation={1}>
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ py: 1, gap: 2, flexWrap: "wrap" }}>
        <Stack
          component={RouterLink}
          to="/"
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ color: "inherit", textDecoration: "none", minWidth: "fit-content" }}
        >
          <ImportContactsTwoToneIcon color="secondary" />
          <Typography variant="h6" component="span" fontWeight={700}>
            Book Explorer
          </Typography>
        </Stack>

        <Box sx={{ flex: "1 1 280px", maxWidth: 520 }}>
          <SearchInput />
        </Box>

        <Stack direction="row" spacing={1} sx={{ ml: { md: "auto" } }}>
          <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/favorites"
            color="inherit"
            startIcon={<FavoriteBorderIcon />}
          >
            Favorites
          </Button>
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
