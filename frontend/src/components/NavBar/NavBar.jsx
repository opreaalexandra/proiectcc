import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../Search/Search";

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "460px",
    },
  },
  navBarBg: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const NavBar = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Box className={classes.navBar}>
      <AppBar position="relative" className={classes.navBarBg}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            WEATHER APP
          </Typography>
          <Search onSubmit={onSubmit} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;