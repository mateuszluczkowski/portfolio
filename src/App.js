import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./routes/AboutMe";
import ReactApp from "./routes/ReactApp";
import Contact from "./routes/Contact";
import EnterContainer from "./routes/EnterContainer";
import Projects from "./routes/Projects";
import StartContainer from "./routes/StartContainer";
//layout
import Navbar from "./components/Navbar";
import NavArrows from "./components/NavArrows";
import "./sass/style.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";

const App = () => {
  const routes = [
    { path: "/start", name: "Start", Component: <StartContainer /> },
    { path: "/reactapp", name: "Aplikacje React", Component: <ReactApp /> },
    { path: "/projects", name: "Moje Realizacje", Component: <Projects /> },
    { path: "/aboutme", name: "O mnie", Component: <AboutMe /> },
    { path: "/contact", name: "Kontakt", Component: <Contact /> },
  ];

  return (
    <Router>
      <Navbar routes={routes} />
      <NavArrows routes={routes} />
      {routes.map((route, index) => {
        return (
          <Switch key={index}>
            <Route path={route.path}>{route.Component}</Route>
          </Switch>
        );
      })}
      <Switch>
        <Route exact path="/">
          <EnterContainer />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
