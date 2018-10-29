import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Home from "./Home";
import About from "./About";
import "./App.css";
import ContactPage from "./ContactPage";

const theme = createMuiTheme({
  primary: {
    red
  }
});

const styles = theme => ({});

console.log(theme);
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactPage} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
