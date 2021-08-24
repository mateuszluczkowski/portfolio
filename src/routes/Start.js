import React from "react";

import Navbar from "../components/Navbar";
import "../sass/_start.scss";

const Start = (props) => {
  return (
    <div className="Start">
      <Navbar active="Start" />
      <h1 className="Start__title">
        {props.text}
        <span style={props.cursorBlinkStyle}>|</span>
      </h1>
    </div>
  );
};

export default Start;
