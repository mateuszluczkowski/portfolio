import React, { useState } from "react";

import Navbar from "../components/Navbar";
import "../sass/_start.scss";
let letterIndex = -1;
let isRunningTyping = false;
const Start = () => {
  let textForTyping =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facere?";

  const [typingText, setTypingText] = useState("");
  const handleTyping = (text) => {
    let intervalTyping = setInterval(() => {
      if (
        letterIndex === text.length - 1 ||
        text[letterIndex + 1] === undefined
      ) {
        clearInterval(intervalTyping);
        console.log(intervalTyping);
        // let intervalTextPointer = setInterval(() => {
        //   console.log(intervalTyping);
        // }, 2000);
      }
      isRunningTyping = true;
      setTypingText((prevValue) => prevValue + text[letterIndex++]);
    }, 35);
  };

  if (!isRunningTyping) {
    handleTyping(textForTyping);
  }

  return (
    <div className="Start">
      <Navbar active="Start" />
      <h1 className="Start__title">
        {typingText}
        <span> |</span>
      </h1>
    </div>
  );
};

export default Start;
