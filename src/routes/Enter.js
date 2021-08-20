import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/Enter.scss";
const Enter = () => {
  const [backgroundColor, setBackgroundColor] = useState(`rgb(0, 0, 0)`);

  const handleMouseMove = (ratioX, ratioY) => {
    setBackgroundColor(
      `rgb(${150 * ratioX}, ${ratioX * 150}, ${ratioY * 220 + 30})`
    );
  };

  const mouseMovedata = (event) => {
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
    handleMouseMove(ratioX, ratioY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      mouseMovedata(event);
    });
    return function cleanup() {
      document.removeEventListener(
        "mousemove",
        (event) => {
          mouseMovedata(event);
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
          Szukam pracy na stanowisku Junior Front-End Developer. Jeśli
          potrzebujesz Pracownika przez duże "P" kliknij w przycisk Enter.
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
