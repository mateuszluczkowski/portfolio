import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import App from "./routes/App";
import Contact from "./routes/Contact";
import EnterContainer from "./routes/EnterContainer";
import Projects from "./routes/Projects";
import StartContainer from "./routes/StartContainer";

import "./sass/style.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
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
          <StartContainer />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <EnterContainer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
