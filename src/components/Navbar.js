import NavLink from "./NavLink";
import NavSocialLink from "./NavSocialLink";

const Navbar = (props) => {
  const routes = [
    { path: "/start", name: "Start", Component: "Start" },
    { path: "/reactapp", name: "Aplikacje React", Component: "ReactApp" },
    { path: "/projects", name: "Moje Realizacje", Component: "Projects" },
    { path: "/aboutme", name: "O mnie", Component: "AboutMe" },
    { path: "/contact", name: "Kontakt", Component: "Contact" },
  ];

  return (
    <div className="Navbar" style={props.isVisible}>
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
      <div className="Navbar__socialmedia">
        <NavSocialLink
          path="https://www.facebook.com/profile.php?id=100001072855712"
          icon="fa-facebook"
        />
        <NavSocialLink
          path="https://www.instagram.com/whoochcovsky/"
          icon="fa-instagram"
        />
      </div>
    </div>
  );
};
export default Navbar;
