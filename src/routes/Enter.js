import { NavLink } from "react-router-dom";

const Enter = ({ backgroundColor, mouseMoveEventData }) => {
  return (
    <div
      className="wrapper"
      onMouseMove={mouseMoveEventData}
      style={{ backgroundColor }}
    >
      <div className="Enter">
        <div className="Enter__title">
          Witaj na moim autorskim <span className="Enter__span">Portfolio</span>
        </div>
        <div className="Enter__subtitle">Nazywam się Mateusz Łuczkowski</div>
        <p className="Enter__text">
          Szukam pracy na stanowisku Junior Front-End Developer. Potrzebujesz w
          swoim zespole wirtuoza programowania? Kliknij w przycisk ENTER.
        </p>
        <NavLink to="/start" className="Enter__button">
          <div className="Enter__button-border"></div>
          <div className="Enter__button-border"></div>
          Enter
        </NavLink>
      </div>
    </div>
  );
};

export default Enter;
