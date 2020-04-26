import React from "react";
import DropTarget from "./DropTarget";
import { getFrameHeight } from "../utils";

const getInnerHeight = ({ children }) => {
  const heights = children.map(getFrameHeight);
  return Math.max(...heights, 1);
};

const getFinalTargetSize = ({ children, layoutOptions, level }) => () => {
  const {
    availableColumns,
    gridRowHeight,
    gridColumnWidth,
    targetHeight,
    targetWidth,
  } = layoutOptions;

  const rows = getInnerHeight({ children, layoutOptions }) || 1;
  const height = rows * gridRowHeight - targetHeight;

  // no available columns => 0 width for last frame
  if (!availableColumns) {
    return { height, width: 0 };
  }

  // in top-level row, the last frame fills the remaining row
  if (level === 0) {
    const width = children.length
      ? availableColumns * gridColumnWidth
      : availableColumns * gridColumnWidth - targetWidth;

    return { height, width };
  }

  // default for final target: overlap right edge of last frame
  return {
    height,
    width: targetWidth,
    marginLeft: -targetWidth,
  };
};

const getTargetSize = (props) => () => {
  const { children, layoutOptions } = props;
  const rows = getInnerHeight({ children, layoutOptions }) || 1;
  const {
    availableColumns,
    gridRowHeight,
    targetHeight,
    targetWidth,
  } = layoutOptions;

  return {
    disabled: !availableColumns,
    height: rows * gridRowHeight - targetHeight,
    width: targetWidth,
  };
};

const getRowDropTarget = (columnProps) => {
  return (props) => {
    return (
      <DropTarget
        {...props}
        getTargetSize={getTargetSize(columnProps)}
        getFinalTargetSize={getFinalTargetSize(columnProps)}
      />
    );
  };
};

export default getRowDropTarget;
