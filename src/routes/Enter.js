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
    const mouseMoveData = {
      axisX: {
        clientX: event.clientX,
        windowWidth: window.innerWidth,
      },
      axisY: {
        clientY: event.clientY,
        windowHeight: window.innerHeight,
      },
      ratio: 3,
    };
    const { axisX, axisY, ratio } = mouseMoveData;

    const ratioX = axisX.clientX / axisX.windowWidth / ratio;
    const ratioY = axisY.clientY / axisY.windowHeight / ratio;

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
