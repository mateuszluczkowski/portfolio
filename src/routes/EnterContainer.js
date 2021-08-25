import { useState } from "react";

import Enter from "./Enter";
import "../sass/Enter.scss";

const EnterContainer = () => {
  document.title = "Witaj - Portfolio - Mateusz Łuczkowski";
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

  return (
    <Enter
      backgroundColor={backgroundColor}
      mouseMoveEventData={mouseMoveEventData}
    />
  );
};

export default EnterContainer;
