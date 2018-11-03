import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Home from "./Home";
import About from "./About";
import ContactPage from "./ContactPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
