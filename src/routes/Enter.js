import React from "react";
import { Link } from "react-router-dom";
import "../sass/Enter.scss";
class Enter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: `rgb(255, 255, 255)`,
    };
  }
  componentDidMount() {
    document.addEventListener("mousemove", (event) => {
      this.mouseMovedata(event);
    });
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", (event) => {
      this.mouseMovedata(event);
    });
  }
  mouseMovedata = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const ratio = 3;
    const ratioX = clientX / windowWidth / ratio;
    const ratioY = clientY / windowHeight / ratio;
    this.setState({
      backgroundColor: `rgb(${150 * ratioX}, ${ratioX * 150}, ${
        ratioY * 220 + 30
      })`,
    });
  };
  render() {
    return (
      <div
        className="wrapper"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <div className="Enter">
          <div className="Enter__title">
            Witaj na moim autorskim{" "}
            <span className="Enter__span">Portfolio</span>
          </div>
          <div className="Enter__subtitle">Nazywam się Mateusz Łuczkowski</div>
          <p className="Enter__text">
            Szukam pracy na stanowisku Junior Front-End Developer. Jeśli
            potrzebujesz Pracownika przez duże "P" kliknij w przycisk Enter.
          </p>
          <Link to="/start" className="Enter__button">
            Enter
          </Link>
        </div>
      </div>
    );
  }
}

export default Enter;
