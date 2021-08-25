import { Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

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
  let location = useLocation();
  const routes = [
    { path: "/start", name: "Start", Component: <StartContainer /> },
    { path: "/reactapp", name: "Aplikacje React", Component: <ReactApp /> },
    { path: "/projects", name: "Moje Realizacje", Component: <Projects /> },
    { path: "/aboutme", name: "O mnie", Component: <AboutMe /> },
    { path: "/contact", name: "Kontakt", Component: <Contact /> },
  ];

  return (
    <>
      <Navbar routes={routes} location={location} />
      <NavArrows routes={routes} location={location} />
      {routes.map(({ path, Component }) => {
        return (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">{Component}</div>
              </CSSTransition>
            )}
          </Route>
        );
      })}

      <Route exact path="/">
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <EnterContainer />
          </CSSTransition>
        )}
      </Route>
    </>
  );
};
export default App;
