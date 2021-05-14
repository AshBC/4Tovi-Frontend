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
import NewResult from "./pages/NewResult";
import "./style/all.scss";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={NewResult} />
            <Route path="/upload" component={Upload} />
            <Route path="/newResult" component={App} />
            <Route path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
   </Router>,
    document.getElementById("root")
);