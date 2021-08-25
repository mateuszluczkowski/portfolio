import NaviLink from "./NaviLink";
import NavSocialLink from "./NavSocialLink";

const Navbar = ({ routes, location }) => {
  return (
    <div className="Navbar">
      <div className="Navbar__brand-name">Mateusz Łuczkowski</div>
      <ul className="Navbar__list">
        {routes.map(({ path, name }, index) => {
          return (
            <NaviLink key={index} path={path} name={name} location={location} />
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
