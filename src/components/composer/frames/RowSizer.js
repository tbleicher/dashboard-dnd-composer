import React from "react";
import Background from "./Background";
import Sizer from "./Sizer";
import { getFrameHeight, getFrameWidth } from "./utils";
import { getRowDropTarget } from "./DropTarget";

/**
 * get the height of a RowSizer's children array (max of heights)
 *
 * @param {array} frames
 */
const getInnerHeight = ({ children }) => {
  const heights = children.map(getFrameHeight);
  return Math.max(...heights, 1);
};

/**
 * get the actual width of a RowSizer's children array (sum of widths)
 *
 * @param {array} frames
 */
const getInnerWidth = (frames) => {
  return frames.map(getFrameWidth).reduce((sum, w) => sum + w, 0);
};

const getLayoutOptions = ({ children, level, layoutOptions }) => {
  if (level !== 0) return layoutOptions;

  const usedColumns = getInnerWidth(children, layoutOptions);
  return {
    ...layoutOptions,
    availableColumns: layoutOptions.availableColumns - usedColumns,
  };
};

const RowSizer = (initialProps) => {
  const layoutOptions = getLayoutOptions(initialProps);
  const props = { ...initialProps, layoutOptions };

  const DropTarget = getRowDropTarget(props);

  return (
    <Background data-type="background" {...props}>
      <Sizer
        {...props}
        rows={getInnerHeight(props)}
        canExpand={!layoutOptions.availableColumns}
        DropTarget={DropTarget}
      />
    </Background>
  );
};

export default RowSizer;
