import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Proptypes from "prop-types";
import NavBar from "./NavBar";
import { Grid, Typography } from "@material-ui/core";
import MetaTags from "react-meta-tags";
class Home extends Component {
    render() {

        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <MetaTags>
                    <title>Neil Lemmer's Web Portfolio</title>
                </MetaTags>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='display1'>
                        This Website is still under construction. But you are more then welcome to checkout the About page for more details.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

Home.Proptypes = {
    classes: Proptypes.object.isRequired
};

export default withStyles(styles)(Home);
