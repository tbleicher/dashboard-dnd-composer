import React from "react";
import Frame from "./Frame";

const TextFrame = (props) => {
  return <Frame {...props} />;
};
TextFrame.defaultProps = {
  icon: "textbox",
};

export default TextFrame;
