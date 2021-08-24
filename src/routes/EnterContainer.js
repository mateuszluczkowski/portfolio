import React, { useState, useEffect } from "react";
import Enter from "./Enter";

import "../sass/Enter.scss";

document.title = "Witaj - Portfolio - Mateusz Łuczkowski";

const EnterContainer = () => {
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
  return <Enter backgroundColor={backgroundColor} />;
};

export default EnterContainer;
