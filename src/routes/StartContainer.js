import { useState, useEffect } from "react";

import Start from "./Start";
import "../sass/_start.scss";

const delayTyping = 40;
const delayCursorBlink = 1000;

document.title = "Start - Portfolio - Mateusz Łuczkowski";

const StartContainer = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [isVibleCursor, setIsVibleCursor] = useState("true");

  const textTyping = "Typowanie piękne tutaj następuje";

  const cursorBlinkStyle = {
    opacity: isNaN(Number(isVibleCursor)) ? true : Number(isVibleCursor),
  };

  const handleText = () =>
    setText((prev) => {
      setCount(count + 1);
      return prev + textTyping[count];
    });

  useEffect(() => {
    const cursorBlink = setTimeout(
      () => setIsVibleCursor(!isVibleCursor),
      delayCursorBlink
    );
    if (text.length < textTyping.length) {
      const typingFunction = setTimeout(() => handleText(), delayTyping);
      return function cleanup() {
        clearTimeout(typingFunction);
        clearTimeout(cursorBlink);
      };
    }
  });

  return <Start cursorBlinkStyle={cursorBlinkStyle} text={text} />;
};

export default StartContainer;
