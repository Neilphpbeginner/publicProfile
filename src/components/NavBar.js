import React, { Component } from "react";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Paper,
    Typography,
    Drawer,
    MenuList,
    MenuItem
} from "@material-ui/core";

class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper>
                    <AppBar className={classes.appBar} color="primary">
                        <Toolbar>
                            <Typography variant="h5" color='secondary'>Neil Lemmer's Web Portfolio</Typography>
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
                            <NavLink to="/" className={classes.link}>
                                <MenuItem>Home</MenuItem>
                            </NavLink>
                            <NavLink to="/about" className={classes.link}>
                                <MenuItem>About</MenuItem>
                            </NavLink>
                            <NavLink to="/contact" className={classes.link}>
                                <MenuItem>Contact Me</MenuItem>
                            </NavLink>
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
