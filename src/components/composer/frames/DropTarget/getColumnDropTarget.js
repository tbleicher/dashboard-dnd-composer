import React from "react";
import DropTarget from "./DropTarget";
import { getFrameHeight } from "../utils";

const getFinalTargetSize = (props) => () => {
  const { children, rows, layoutOptions, level } = props;
  const { gridRowHeight, targetHeight } = layoutOptions;
  const innerHeight = getInnerHeight(props);

  // empty column: full height drop area
  if (children.length === 0) {
    return rows * gridRowHeight;
  }

  // some space left:  fill rest of column
  if (rows > innerHeight) {
    return { height: (rows - innerHeight) * gridRowHeight };
  }

  // larger area to add new top-level row
  if (level === -1) {
    return { height: gridRowHeight + targetHeight };
  }

  // full column: small drop area on top of last frame
  return { height: targetHeight, marginTop: -targetHeight };
};

const getInnerHeight = ({ children }) => {
  return children
    .map((frame) => getFrameHeight(frame))
    .reduce((sum, h) => sum + h, 0);
};

const getTargetSize = (props) => (index) => {
  const { targetHeight } = props.layoutOptions;

  if (props.level === -1) {
    return {
      rows: 1,
      height: targetHeight * 2,
    };
  }

  return {
    height: index === 0 ? targetHeight / 2 : targetHeight,
    marginTop: index === 0 ? targetHeight / -2 : 0,
  };
};

const getColumnDropTarget = (columnProps) => {
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

export default getColumnDropTarget;
