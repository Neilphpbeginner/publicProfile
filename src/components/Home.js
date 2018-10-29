import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Proptypes from "prop-types";
import NavBar from "./NavBar";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
          <div className={classes.toolbar}>Home</div>
        </div>
      </div>
    );
  }
}

Home.Proptypes = {
  classes: Proptypes.object.isRequired
};

export default withStyles(styles)(Home);
