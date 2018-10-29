import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Paper,
  Typography,
  Drawer,
  MenuList,
  MenuItem
} from "@material-ui/core";

const styles = theme => ({
  drawer: {
    width: 100
  },
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    width: 120
  },
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: "none"
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper>
          <AppBar className={classes.appBar} color="secondary">
            <Toolbar>
              <Typography variant="h5">Neil Lemmer's Web Portfolio</Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <MenuList>
              <MenuItem>
                <Link className={classes.link} to="/">
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.link} to="/about">
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.link} to="/contact">
                  Contact Me
                </Link>
              </MenuItem>
            </MenuList>
          </Drawer>
        </Paper>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
