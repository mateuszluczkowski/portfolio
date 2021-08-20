const NavLink = (props) => {
  return (
    <li className="Navbar__item">
      <a
        className={props.active ? "Navbar__link active" : "Navbar__link"}
        href={props.path}
      >
        {props.name}
      </a>
    </li>
  );
};
export default NavLink;
