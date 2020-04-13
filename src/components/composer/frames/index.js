import ColumnSizer from "./ColumnSizer";
import RowSizer from "./RowSizer";
import Frame from "./Frame";
import { getFrameHeight, getFrameWidth } from "./utils";

const frameTypes = {
  CHART: "CHART",
  COLUMN: "COLUMN",
  FRAME: "FRAME",
  IMAGE: "IMAGE",
  ROW: "ROW",
  SPACER_H: "SPACER_H",
  SPACER_V: "SPACER_V",
  TABLE: "TABLE",
  TEXT: "TEXT",
};

const frameTypesMap = Object.keys(frameTypes).reduce((mapping, key) => {
  mapping[key] = Frame;
  return mapping;
}, {});
frameTypesMap[frameTypes.COLUMN] = ColumnSizer;
frameTypesMap[frameTypes.ROW] = RowSizer;

export {
  ColumnSizer,
  Frame,
  RowSizer,
  frameTypes,
  frameTypesMap,
  getFrameHeight,
  getFrameWidth,
};
