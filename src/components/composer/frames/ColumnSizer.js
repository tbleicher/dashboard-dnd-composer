import React from "react";
import { PropTypes } from "prop-types";
import Sizer from "./Sizer";
import { getFrameHeight, getFrameWidth } from "./utils";

const getInnerHeight = (props) => {
  const { children, layoutOptions } = props;
  return children
    .map((frame) => getFrameHeight(layoutOptions)(frame))
    .reduce((sum, h) => sum + h, 0);
};

const getTargetSize = (props) => (frame, index) => {
  const { targetHeight } = props.layoutOptions;

  return {
    height: index === 0 ? targetHeight / 2 : targetHeight,
    marginTop: index === 0 ? targetHeight / -2 : 0,
  };
};

const getFrameSize = (props) => (frame, index) => {
  const { layoutOptions } = props;

  const height = getFrameHeight(layoutOptions)(frame);
  const width = getFrameWidth(layoutOptions)(frame);

  return { width, height };
};

const getFinalTargetSize = (props) => (frames) => {
  const { height, layoutOptions, level } = props;
  const { gridRowHeight, targetHeight } = layoutOptions;
  const innerHeight = getInnerHeight(props);

  // empty column: full height drop area
  if (frames.length === 0) return height;

  // some space left:  fill rest of column
  if (height > innerHeight) {
    return { height: height - innerHeight };
  }

  // larger area to add new top-level row
  if (level === -1) {
    return { height: gridRowHeight + targetHeight };
  }

  // full column: small drop area on top of last frame
  return { height: targetHeight, marginTop: -targetHeight };
};

const ColumnSizer = (props) => {
  const { height, width, layoutOptions } = props;
  const { targetHeight, targetWidth } = layoutOptions;

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: getTargetSize(props),

    // height for child frames
    getFrameSize: getFrameSize(props),

    // height for final target
    getFinalTargetSize: getFinalTargetSize(props),
  };

  return (
    <div
      data-type="ColumnSizer"
      style={{
        height: height - targetHeight,
        width: width - targetWidth,
        flexGrow: 0,
        borderRadius: 8,
        // border: "1px solid blue",
        // margin: -1,
      }}
    >
      <Sizer frameDimensions={frameDimensions} {...props} />
    </div>
  );
};

ColumnSizer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default ColumnSizer;
