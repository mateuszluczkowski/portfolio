import NavLink from "./NavLink";
import NavSocialLink from "./NavSocialLink";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="Navbar__brand-name">Mateusz Łuczkowski</div>
      <ul className="Navbar__list">
        {props.routes.map((item, index) => {
          return (
            <NavLink
              key={index}
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
