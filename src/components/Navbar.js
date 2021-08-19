function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="Navbar__brand-name">Mateusz Łuczkowski</div>
      <ul className="Navbar__list">
        <li className="Navbar__item">
          <a
            href="/start"
            className={
              props.active === "Start" ? "Navbar__link active" : "Navbar__link"
            }
          >
            Start
          </a>
        </li>
        <li className="Navbar__item">
          <a
            href="/app"
            className={
              props.active === "App" ? "Navbar__link active" : "Navbar__link"
            }
          >
            Aplikacje React
          </a>
        </li>
        <li className="Navbar__item">
          <a
            href="/projects"
            className={
              props.active === "Projects"
                ? "Navbar__link active"
                : "Navbar__link"
            }
          >
            Moje realizacje
          </a>
        </li>
        <li className="Navbar__item">
          <a
            href="/aboutme"
            className={
              props.active === "AboutMe"
                ? "Navbar__link active"
                : "Navbar__link"
            }
          >
            O mnie
          </a>
        </li>
        <li className="Navbar__item">
          <a
            href="/contact"
            className={
              props.active === "Contact"
                ? "Navbar__link active"
                : "Navbar__link"
            }
          >
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
