import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./app";
import Upload from "./components/Upload";
import "./style/all.scss";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
            <Route path="/upload" component={Upload} />
            <Route path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
   </Router>,
    document.getElementById("root")
);