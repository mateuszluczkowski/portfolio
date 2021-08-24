import "../sass/_start.scss";

const Start = (props) => {
  const { text, cursorBlinkingStyle } = props;
  return (
    <div className="Start">
      <h1 className="Start__title">
        {text}
        <span style={cursorBlinkingStyle}>|</span>
      </h1>
    </div>
  );
};

export default Start;
