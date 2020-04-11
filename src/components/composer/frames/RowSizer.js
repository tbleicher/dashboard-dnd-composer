import React from "react";
import Sizer from "./Sizer";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "../constants";
import { frameTypes } from ".";

const getDisplayHeight = (frame, maxHeight, targetHeight) => {
  if (frame.type === frameTypes.COLUMN) return maxHeight;

  if (frame.height < maxHeight) {
    return frame.height - targetHeight / 2;
  }

  return frame.height - targetHeight;
};

const getMaxHeight = (frames) => {
  const heights = frames.map(getHeight);
  console.log(heights);

  return Math.max(...heights);
};

const getHeight = (frame) => {
  const { children, id, type, height } = frame;
  console.log(id, type, height);

  if (height) return height;

  if (children && children.length) {
    return Math.max(...children.map(getHeight));
  }

  return GRID_ROW_HEIGHT;
};

const RowSizer = (props) => {
  const { layout, targetHeight, ...sizerProps } = props;
  const maxHeight = getMaxHeight(layout.children) - targetHeight;

  console.log("RowSizer", layout.id, maxHeight);

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: (frame, index) => ({
      flexGrow: 0,
      height: maxHeight,
      width: index === 0 ? targetHeight / 2 : targetHeight,
    }),
    // height for child frames
    getFrameSize: (frame, index) => ({
      flexGrow: 0,
      height: getDisplayHeight(frame, maxHeight, targetHeight),
      width: frame.width - targetHeight,
    }),
    // height for final target
    getFinalTargetSize: (children) => ({
      flexGrow: 1,
      height: maxHeight,
      width: children.length ? GRID_COLUMN_WIDTH - targetHeight : "100%",
    }),
  };

  return (
    <div
      data-type="RowSizer"
      style={{ display: "flex", outline: "1px solid green" }}
    >
      <Sizer
        layout={layout}
        {...sizerProps}
        frameDimensions={frameDimensions}
      />
    </div>
  );
};

RowSizer.defaultProps = {
  targetHeight: 20,
};

export default RowSizer;
