import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./components/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

console.log(theme)

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
