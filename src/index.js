import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
//3rd line is equivalent to:
/*import ReactDOM from "react-dom";
const render = ReactDOM.render;*/
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";


render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
);