import { NavLink } from "react-router-dom";
const NaviLink = ({ path, name, location }) => {
  return (
    <li className="Navbar__item">
      {" "}
      <NavLink key={path} className={"Navbar__link"} to={path}>
        {name}
      </NavLink>
    </li>
  );
};
export default NaviLink;
