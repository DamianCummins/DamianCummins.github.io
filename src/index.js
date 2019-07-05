import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import assistantUtil from "./lib/assistantUtil";

assistantUtil.init().then(() => {
    console.log("Loaded model");
    ReactDOM.render(<App />, document.getElementById("root"));
    assistantUtil.predict("What work experience do you have?").then((response) => {
        console.log(response);
    });
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
