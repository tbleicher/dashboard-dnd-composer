import React from "react";
import { PropTypes } from "prop-types";
import Sizer from "./Sizer";
import { GRID_ROW_HEIGHT } from "../constants";
import { getFrameHeight, getFrameWidth } from "./utils";

const getFrameSize = (layoutOptions) => (frame) => {
  const { targetHeight } = layoutOptions;

  const height = getFrameHeight(layoutOptions)(frame) - targetHeight;
  const width = getFrameWidth(layoutOptions)(frame);

  return { width, height };
};

const getFinalTargetSize = ({ height, layoutOptions }) => (frames) => {
  const { targetHeight } = layoutOptions;
  if (frames.length === 0) return height;

  return { height: GRID_ROW_HEIGHT + targetHeight / 2 };
};

const ColumnSizer = (props) => {
  const { height, layoutOptions, width } = props;
  const { targetHeight } = layoutOptions;

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: (frame, index) => ({
      height: index === 0 ? targetHeight / 2 : targetHeight,
    }),
    // height for child frames
    getFrameSize: getFrameSize(layoutOptions),

    // height for final target
    getFinalTargetSize: getFinalTargetSize(props),
  };

  return (
    <div
      data-type="ColumnSizer"
      style={{ outline: "1px solid green", height, width, flexGrow: 0 }}
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
