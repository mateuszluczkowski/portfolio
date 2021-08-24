import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import ReactApp from "./routes/ReactApp";
import Contact from "./routes/Contact";
import EnterContainer from "./routes/EnterContainer";
import Projects from "./routes/Projects";
import StartContainer from "./routes/StartContainer";
//layout
import Navbar from "./components/Navbar";
import "./sass/style.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/app">
          <ReactApp />
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
  );
};
export default App;
