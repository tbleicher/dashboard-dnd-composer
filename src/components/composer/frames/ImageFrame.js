import React from "react";
import Frame from "./Frame";

const ImageFrame = (props) => {
  return <Frame {...props} />;
};
ImageFrame.defaultProps = {
  icon: "image",
};

export default ImageFrame;
