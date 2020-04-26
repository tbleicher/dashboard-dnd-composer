import { frameTypes } from ".";

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
export const getFrameHeight = (frame) => {
  const { children, rows, type } = frame;

  if (rows) return rows;
  // if (height) return height;

  // in a column, add up the height of children
  if (type === frameTypes.COLUMN && children.length) {
    return children.map(getFrameHeight).reduce((sum, h) => sum + h, 0);
  }

  // in a row get the max height of all children
  if (type === frameTypes.ROW) {
    return Math.max(...children.map(getFrameHeight), 1);
  }

  return 1;
};

export const getFrameWidth = (frame) => {
  const { children, columns, type } = frame;

  if (columns) return columns;

  // in a column, add up the width of children
  if (type === frameTypes.COLUMN && children.length) {
    return Math.max(...children.map(getFrameWidth));
  }

  // in a row get the max width of all children
  if (type === frameTypes.ROW) {
    return children.map(getFrameWidth).reduce((sum, w) => sum + w, 0);
  }

  return 1;
};
