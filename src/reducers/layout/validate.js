import { frameTypes } from "components/composer/frames";

export const validateAddFramePayload = (payload) => {
  const { frameType, height, parent, width } = payload;

  if (!frameType || !parent) return false;

  // row and column don't need dimensions
  if (frameType === frameTypes.ROW || frameType === frameTypes.COLUMN) {
    return true;
  }

  return width && height;
};
