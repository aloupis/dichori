import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useAuth from "../useAuth";

import LayoutStyles from "./LayoutStyles";

const useStyles = makeStyles(LayoutStyles);

const TopBar = ({ drawerIsOpen, openDrawer }) => {
  const { logoutUser, error } = useAuth();
  const classes = useStyles();

  const logoutHandler = async () => {
    // authContext.logout();
    await logoutUser();
    window.location.reload(); // TO-DO fix somehow
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerIsOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
          className={clsx(classes.menuButton, drawerIsOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Dichori Admin
        </Typography>
        <Button color="inherit" onClick={logoutHandler}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  drawerIsOpen: PropTypes.bool,
  openDrawer: PropTypes.func,
};

export default TopBar;
