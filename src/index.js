import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Enter from "./routes/Enter";
import Main from "./routes/Main";

import "./sass/style.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route exact path="/">
          <Enter />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
