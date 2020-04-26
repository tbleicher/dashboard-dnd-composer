import { frameTypes } from "components/composer/frames";

export const validateAddFramePayload = (payload) => {
  const { columns, frameType, parent, rows } = payload;

  if (!frameType || !parent) return false;

  // row and column don't need dimensions
  if (frameType === frameTypes.ROW || frameType === frameTypes.COLUMN) {
    return true;
  }

  return columns && rows;
};
