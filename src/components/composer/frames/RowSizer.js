import React from "react";
import { PropTypes } from "prop-types";
import Background from "./Background";
import Sizer from "./Sizer";
import { frameTypes } from ".";
import { getFrameHeight, getFrameWidth } from "./utils";

/**
 * calculate real height of a frame during layout
 *
 * The grid-aligned height of a frame is reduced during layout
 * to make space for drop targets and column/row wrappers
 *
 * @param {Frame} frame
 * @param {number} maxHeight
 * @param {number} targetHeight
 */
const getDisplayHeight = (frame, maxHeight, targetHeight) => {
  if (frame.type === frameTypes.COLUMN) return maxHeight;

  if (frame.height < maxHeight) {
    return frame.height - targetHeight / 2;
  }

  return frame.height - targetHeight;
};

/**
 * calculate width and height for the final drop target in a RowSizer
 *
 * @param {any} props - the Frame props (includes children)
 * @param {number} maxWidth
 */
const getFinalTargetSize = (props) => (frames) => {
  const { layoutOptions } = props;
  const { maxWidth, targetHeight } = layoutOptions;

  const height = frames.length
    ? Math.max(...frames.map(getFrameHeight(layoutOptions)))
    : layoutOptions.gridRowHeight;

  const width = frames.length
    ? maxWidth -
      frames.map(getFrameWidth(layoutOptions)).reduce((sum, w) => sum + w, 0)
    : maxWidth;

  return { height: height - targetHeight, width };
};

/**
 * get the height of a RowSizer's children array (max of heights)
 *
 * @param {array} frames
 */
const getInnerHeight = (frames, layoutOptions) => {
  const heights = frames.map(getFrameHeight(layoutOptions));

  return Math.max(...heights);
};

const RowSizer = (props) => {
  const { layout, layoutOptions } = props;

  const { targetHeight } = layoutOptions;
  const maxHeight =
    getInnerHeight(layout.children, layoutOptions) - targetHeight;

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
      width: getFrameWidth(layoutOptions)(frame) - targetHeight,
    }),
    // height for final target
    getFinalTargetSize: getFinalTargetSize(props, props.width),
  };

  return (
    <Background
      data-type="background"
      {...layoutOptions}
      gridColumnWidth={props.level === 0 ? layoutOptions.gridColumnWidth : 0}
      gridRowHeight={props.level === 0 ? layoutOptions.gridRowHeight : 0}
    >
      <Sizer layout={layout} {...props} frameDimensions={frameDimensions} />
    </Background>
  );
};

RowSizer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default RowSizer;
