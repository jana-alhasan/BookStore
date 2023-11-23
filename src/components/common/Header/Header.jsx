/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Hidden,
  Grid,
  Container,
} from "@material-ui/core";
import { Stack, Divider } from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  Person,
  Menu as MenuIcon,
  Brightness1,
  ImportContactsTwoTone,
  Phone,
} from "@material-ui/icons";
import SearchInput from "./SearchInput";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  const menuItems = ["Privacy Policy", "Warranty", "Shopping", "Returns"];
  const secondryMenu = [
    "The must read",
    "News",
    "Promotion of the mount",
    "Plublishs",
    "Subscribe to the newsletter",
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <AppBar className={classes.menuBar}>
        <Container maxWidth="lg" className={classes.container}>
          <Toolbar className={classes.menuItem}>
            <Grid container alignItems="center" justifyContent={"center"}>
              <Grid item xs={6} sm={3} md={2} className={classes.logo}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography className={classes.logoText}>
                    B-W
                    <Stack
                      direction="row"
                      alignItems="center"
                      className={classes.logoImg}
                    >
                      <Brightness1 className={classes.circleIcon} />
                    </Stack>
                    rld
                  </Typography>
                  <ImportContactsTwoTone className={classes.book} />
                  <Divider orientation="vertical" className={classes.vLine} />
                  <Typography className={classes.cap}>
                    We Love <br />
                    Books
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={1} md={4}>
                <SearchInput />
              </Grid>
              <Grid item xs={1} sm={4} md={4} lg={4}>
                <Hidden smDown>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    {menuItems.map((menuItem, index) => (
                      <Typography key={index} className={classes.rightMenu}>
                        {menuItem}
                      </Typography>
                    ))}
                  </Stack>
                </Hidden>
                <Hidden mdUp xsDown>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Phone className={classes.phone} />
                    <Typography> +445 87 999 000 </Typography>
                  </Stack>
                </Hidden>
              </Grid>
              <Grid item xs={3} sm={4} md={2} lg={2}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"end"}
                  spacing={1}
                  className={classes.menuIcon}
                >
                  <ShoppingCart />
                  <Hidden xsDown>
                    <Divider orientation="vertical" className={classes.vLine} />
                    <Favorite />
                    <Divider orientation="vertical" className={classes.vLine} />
                    <Person />
                  </Hidden>
                  <Hidden mdUp>
                    <IconButton onClick={handleDrawerOpen} edge="end">
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      className={classes.drawer}
                      variant="temporary"
                      anchor="right"
                      open={isDrawerOpen}
                      onClose={handleDrawerClose}
                      classes={{ paper: classes.drawerPaper }}
                    >
                      <IconButton onClick={handleDrawerClose} edge="end">
                        <MenuIcon />
                      </IconButton>
                      <List>
                        {menuItems.map((menuItem, index) => (
                          <ListItem button key={index}>
                            <ListItemText primary={menuItem} />
                          </ListItem>
                        ))}
                      </List>
                    </Drawer>
                  </Hidden>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Hidden smDown>
        <AppBar className={classes.menuBar}>
          <Container maxWidth="lg" className={classes.container}>
            <Toolbar className={classes.seconditem}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item md={8} lg={8}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    {secondryMenu.map((menuItem, index) => (
                      <Typography
                        noWrap
                        className={classes.secondryMenu}
                        key={index}
                      >
                        {menuItem}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                <Grid item md={4} lg={4}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"end"}
                    spacing={1}
                  >
                    <Phone className={classes.phone} />
                    <Typography noWrap> +445 87 999 000 </Typography>
                    <Button className={classes.call}>Request a Call</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>
    </>
  );
};

export default Header;
