import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <AppBar
              position="static"
              className={classes.aboutWidth}
              color="primary"
            >
              <Typography variant={"h5"}>Hello</Typography>
            </AppBar>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
