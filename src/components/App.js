import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
  WithTheme
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { styles } from "./styles";
import Home from "./Home";
import About from "./About";
import "./App.css";
import ContactPage from "./ContactPage";

const theme = createMuiTheme({
  primary: {
    red
  }
});

console.log(theme);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MuiThemeProvider theme={theme}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactPage} />
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
