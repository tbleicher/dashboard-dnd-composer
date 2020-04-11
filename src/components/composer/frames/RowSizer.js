import React from "react";
import Sizer from "./Sizer";

const getHeight = (layout) => {
  const { children, height } = layout;

  if (children && children.length) {
    return Math.max(...children.map(getHeight));
  }

  return height || 80;
};

const RowSizer = (props) => {
  const { targetWidth, ...sizerProps } = props;
  const height = getHeight(props.layout) - targetWidth;

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: (frame, index) => ({
      flexGrow: 0,
      height,
      width: index === 0 ? targetWidth / 2 : targetWidth,
    }),
    // height for child frames
    getFrameSize: (frame, index) => ({
      flexGrow: 0,
      height,
      width: frame.width - targetWidth,
    }),
    // height for final target
    getFinalTargetSize: (children) => ({
      flexGrow: 1,
      height,
      width: children.length ? 80 - targetWidth : "100%",
    }),
  };

  return <Sizer {...sizerProps} frameDimensions={frameDimensions} />;
};

RowSizer.defaultProps = {
  targetWidth: 20,
};

export default RowSizer;
