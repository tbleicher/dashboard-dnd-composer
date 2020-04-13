import React from "react";
import Frame from "./Frame";

const ChartFrame = (props) => {
  return <Frame {...props} />;
};
ChartFrame.defaultProps = {
  icon: "image",
};

export default ChartFrame;
