import NavLink from "./NavLink";
const Navbar = (props) => {
  const routes = [
    { path: "/start", name: "Start", Component: "Start" },
    { path: "/app", name: "Aplikacje React", Component: "App" },
    { path: "/projects", name: "Moje Realizacje", Component: "Projects" },
    { path: "/aboutme", name: "O mnie", Component: "AboutMe" },
    { path: "/contact", name: "Kontakt", Component: "Contact" },
  ];

  return (
    <div className="Navbar">
      <div className="Navbar__brand-name">Mateusz Łuczkowski</div>
      <ul className="Navbar__list">
        {routes.map((item, index) => {
          return (
            <NavLink
              key={index}
              active={props.active === item.Component}
              path={item.path}
              name={item.name}
              Component={item.Component}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
