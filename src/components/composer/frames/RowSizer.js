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
const getDisplayHeight = (frame, maxHeight) => {
  if (frame.type === frameTypes.COLUMN) return maxHeight;

  return frame.height;
};

/**
 * calculate width and height for the final drop target in a RowSizer
 *
 * @param {any} props - the Frame props (includes children)
 * @param {number} maxWidth
 */
const getFinalTargetSize = (props) => (frames) => {
  const { layoutOptions } = props;
  const { gridRowHeight, maxWidth, targetHeight, targetWidth } = layoutOptions;

  // without frames the last target spans the whole width
  if (!frames.length) {
    return {
      height: gridRowHeight - targetHeight,
      width: maxWidth - targetWidth,
    };
  }

  const height = Math.max(...frames.map(getFrameHeight(layoutOptions)));
  const width = maxWidth - getInnerWidth(frames, layoutOptions);

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

/**
 * get the height of a RowSizer's children array (max of heights)
 *
 * @param {array} frames
 */
const getInnerWidth = (frames, layoutOptions) => {
  return frames
    .map(getFrameWidth(layoutOptions))
    .reduce((sum, w) => sum + w, 0);
};

const RowSizer = (props) => {
  const { children, height, layoutOptions, level } = props;

  const { targetHeight, targetWidth } = layoutOptions;
  const innerHeight = getInnerHeight(children, layoutOptions);
  const maxHeight = level ? innerHeight - targetHeight : innerHeight;

  const frameDimensions = {
    // height for first and intermediate drop targets
    getTargetSize: (frame, index) => ({
      flexGrow: 0,
      height: height - targetHeight,
      width: targetWidth,
    }),
    // height for child frames
    getFrameSize: (frame, index) => ({
      flexGrow: 0,
      height: getDisplayHeight(frame, maxHeight),
      width: getFrameWidth(layoutOptions)(frame),
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
      width={200}
      level={props.level}
    >
      <Sizer {...props} frameDimensions={frameDimensions} />
    </Background>
  );
};

RowSizer.propTypes = {
  // icon: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
RowSizer.defaultProps = {
  // icon: "row",
};

export default RowSizer;
