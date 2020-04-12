import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "../constants";
import { frameTypes } from ".";

const defaultOptions = {
  gridColumnWidth: GRID_COLUMN_WIDTH,
  gridRowHeight: GRID_ROW_HEIGHT,
};

/**
 * get nominal height of a frame or sizer
 *
 * The nominal height is the frame's height aligned with grid rows.
 * It's the actual height of the frame in read-only mode but needs
 * to be reduced during layout to make space for drop targets and
 * row/column wrappers.
 *
 * @param {Frame} frame - the Frame object
 */
export const _getFrameHeight = (options = defaultOptions) => (frame) => {
  const { children, type, height } = frame;

  if (height) return height;

  // in a column, add up the height of children
  if (type === frameTypes.COLUMN && children.length) {
    return children
      .map(_getFrameHeight(options))
      .reduce((sum, h) => sum + h, 0);
  }

  // in a row get the max height of all children
  if (type === frameTypes.ROW) {
    return Math.max(
      ...children.map(_getFrameHeight(options)),
      options.gridRowHeight
    );
  }

  return options.gridRowHeight;
};
export const getFrameHeight = (options = defaultOptions) => (frame) => {
  const height = _getFrameHeight(options)(frame);

  if (options.shouldLog && options.shouldLog(frame)) {
    console.group(`getFrameHeight ${frame.id}`);
    console.log(frame);
    console.log("  =>", height);
    console.groupEnd();
  }

  return height;
};

export const _getFrameWidth = (options = defaultOptions) => (frame) => {
  const { children, type, width } = frame;

  if (width) return width;

  // in a column, add up the width of children
  if (type === frameTypes.COLUMN && children.length) {
    return Math.max(...children.map(_getFrameWidth(options)));
  }

  // in a row get the max width of all children
  if (type === frameTypes.ROW) {
    return children.map(_getFrameWidth(options)).reduce((sum, w) => sum + w, 0);
  }

  return options.gridColumnWidth;
};

export const getFrameWidth = (options = defaultOptions) => (frame) => {
  const width = _getFrameWidth(options)(frame);

  if (options.shouldLog && options.shouldLog(frame)) {
    console.group(`getFrameWidth ${frame.id}`);
    console.log(frame);
    console.log("  =>", width);
    console.groupEnd();
  }

  return width;
};
