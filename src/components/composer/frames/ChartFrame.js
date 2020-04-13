import React from "react";
import Frame from "./Frame";

const ChartFrame = (props) => {
  return <Frame {...props} />;
};
ChartFrame.defaultProps = {
  icon: "chart",
};

export default ChartFrame;
