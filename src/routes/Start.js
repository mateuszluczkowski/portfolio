import Navbar from "../components/Navbar";
import "../sass/_start.scss";

const Start = (props) => {
  const { text, cursorBlinkStyle } = props;
  return (
    <div className="Start">
      <Navbar active="Start" />
      <h1 className="Start__title">
        {text}
        <span style={cursorBlinkStyle}>|</span>
      </h1>
    </div>
  );
};

export default Start;
