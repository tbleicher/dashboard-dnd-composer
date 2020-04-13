import ColumnSizer from "./ColumnSizer";
import RowSizer from "./RowSizer";
import Frame from "./Frame";
import ChartFrame from "./ChartFrame";
import ImageFrame from "./ImageFrame";
import TableFrame from "./TableFrame";
import TextFrame from "./TextFrame";

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
frameTypes.sizers = [frameTypes.ROW, frameTypes.COLUMN];
frameTypes.spacers = [frameTypes.SPACER_H, frameTypes.SPACER_V];
frameTypes.frames = [
  frameTypes.FRAME,
  frameTypes.CHART,
  frameTypes.IMAGE,
  frameTypes.TABLE,
  frameTypes.TEXT,
];

const frameTypesMap = Object.keys(frameTypes).reduce((mapping, key) => {
  mapping[key] = Frame;
  return mapping;
}, {});
frameTypesMap[frameTypes.COLUMN] = ColumnSizer;
frameTypesMap[frameTypes.ROW] = RowSizer;
frameTypesMap[frameTypes.CHART] = ChartFrame;
frameTypesMap[frameTypes.IMAGE] = ImageFrame;
frameTypesMap[frameTypes.TABLE] = TableFrame;
frameTypesMap[frameTypes.TEXT] = TextFrame;

export {
  ColumnSizer,
  Frame,
  RowSizer,
  frameTypes,
  frameTypesMap,
  getFrameHeight,
  getFrameWidth,
};
