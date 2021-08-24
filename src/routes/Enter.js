import { Link } from "react-router-dom";

const Enter = (props) => {
  return (
    <div className="wrapper" style={{ backgroundColor: props.backgroundColor }}>
      <div className="Enter">
        <div className="Enter__title">
          Witaj na moim autorskim <span className="Enter__span">Portfolio</span>
        </div>
        <div className="Enter__subtitle">Nazywam się Mateusz Łuczkowski</div>
        <p className="Enter__text">
          Szukam pracy na stanowisku Junior Front-End Developer. Potrzebujesz w
          swoim zespole wirtuoza programowania? Kliknij w przycisk ENTER.
        </p>
        <Link to="/start" className="Enter__button">
          <div className="Enter__button-border"></div>
          <div className="Enter__button-border"></div>
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Enter;
