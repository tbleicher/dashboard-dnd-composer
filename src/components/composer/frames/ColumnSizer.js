import React from "react";
import Sizer from "./Sizer";

const getWidth = (layout) => {
  const { children, width } = layout;

  if (children && children.length) {
    return children.map(getWidth).reduce((sum, w) => sum + w, 0);
  }

  if (layout.type === "ROW" && children.length === 0) return "100%";

  return width || 80;
};

const ColumnSizer = (props) => {
  const { targetHeight, ...sizerProps } = props;

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: (frame, index) => ({
      height: index === 0 ? targetHeight / 2 : targetHeight,
    }),
    // height for child frames
    getFrameSize: (frame, index) => ({
      width: frame.children ? getWidth(frame) : "100%",
      height: frame.height - targetHeight,
    }),
    // height for final target
    getFinalTargetSize: () => ({ flexGrow: 1, height: 80 + targetHeight / 2 }),
  };

  return <Sizer {...sizerProps} frameDimensions={frameDimensions} />;
};

ColumnSizer.defaultProps = {
  targetHeight: 20,
};

export default ColumnSizer;
