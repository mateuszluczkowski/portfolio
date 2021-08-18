function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__brand-name">Mateusz Łuczkowski</div>
      <ul className="Navbar__list">
        <li className="Navbar__item">
          <a href="/" className="Navbar__link">
            Start
          </a>
        </li>
        <li className="Navbar__item">
          <a href="/" className="Navbar__link">
            Aplikacje React
          </a>
        </li>
        <li className="Navbar__item">
          <a href="/" className="Navbar__link">
            Moje realizacje
          </a>
        </li>
        <li className="Navbar__item">
          <a href="/" className="Navbar__link">
            O mnie
          </a>
        </li>
        <li className="Navbar__item">
          <a href="/" className="Navbar__link">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
