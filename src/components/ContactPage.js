import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { Grid } from "@material-ui/core";
import MetaTags from "react-meta-tags";

class ContactPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <MetaTags>
                    <title>Neil Lemmer's Web Portfolio/Contact Me</title>
                </MetaTags>
                <NavBar />
                <div className={classes.content}>
                    <div className={classes.toolbar}>Contact Me</div>
                </div>
            </Grid>
        );
    }
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactPage);
