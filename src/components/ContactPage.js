import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { Grid } from "@material-ui/core";

class ContactPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <NavBar />
                <div className={classes.content}>
                    <div className={classes.toolbar}>Contact Me</div>
                </div>
            </div>
        );
    }
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactPage);
