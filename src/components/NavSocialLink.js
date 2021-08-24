const NavSocialLink = (props) => {
  return (
    <a
      href={props.path}
      className="Navbar__link Navbar__link--socialmedia"
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fab ${props.icon}`}></i>
    </a>
  );
};
export default NavSocialLink;
