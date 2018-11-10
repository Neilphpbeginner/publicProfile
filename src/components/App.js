import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Home from "./Home";
import About from "./About";
import ContactPage from "./ContactPage";
import "./App.css";
import { Grid } from "@material-ui/core";

class App extends Component {
    render() {
        const { classes } = this.props
        return (
            < BrowserRouter >
                <div>
                    <Grid>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactPage} />
                    </Grid>
                </div>
            </BrowserRouter >
        );
    }
}

export default withStyles(styles)(App);
