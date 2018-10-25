import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { createMuiTheme } from "@material-ui/core/styles";
import Home from "./Home";
import About from "./About";
import "./App.css";

// const theme = createMuiTheme({});

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
