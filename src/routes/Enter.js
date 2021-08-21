import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/Enter.scss";

document.title = "Witaj - Portfolio - Mateusz Łuczkowski";

const Enter = () => {
  const [backgroundColor, setBackgroundColor] = useState(`rgb(0, 0, 0)`);

  const handleMouseMove = (multiplerX, multiplerY) => {
    setBackgroundColor(
      `rgb(${150 * multiplerX}, ${multiplerX * 150}, ${multiplerY * 220 + 30})`
    );
  };
  const mouseMoveEventData = (event) => {
    const mouseMoveData = {
      axisX: {
        client: event.clientX,
        windowWidth: window.innerWidth,
      },
      axisY: {
        client: event.clientY,
        windowHeight: window.innerHeight,
      },
      ratio: 3,
    };
    const { axisX, axisY, ratio } = mouseMoveData;
    const multiplerX = axisX.client / axisX.windowWidth / ratio;
    const multiplerY = axisY.client / axisY.windowHeight / ratio;
    handleMouseMove(multiplerX, multiplerY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      mouseMoveEventData(event);
    });
    return function cleanup() {
      document.removeEventListener(
        "mousemove",
        (event) => {
          mouseMoveEventData(event);
        },
        false
      );
    };
  });
  return (
    <div className="wrapper" style={{ backgroundColor: backgroundColor }}>
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
