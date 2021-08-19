import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import App from "./routes/App";
import Contact from "./routes/Contact";
import Enter from "./routes/Enter";
import Projects from "./routes/Projects";
import Start from "./routes/Start";

import "./sass/style.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/projects">
          <Projects />
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
