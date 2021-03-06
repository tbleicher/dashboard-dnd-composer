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
frameTypes.SIZERS = [frameTypes.ROW, frameTypes.COLUMN];
frameTypes.SPACERS = [frameTypes.SPACER_H, frameTypes.SPACER_V];
frameTypes.FRAMES = [
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

// settings for the DnD toolbar
const toolbarConfig = [
  { icon: "row", type: frameTypes.ROW },
  { icon: "column", type: frameTypes.COLUMN },
  // {
  //   icon: "arrowExpandHorizontal",
  //   type: frameTypes.SPACER_H,
  //   width: 80,
  //   height: 60,
  // },
  // {
  //   icon: "arrowExpandVertical",
  //   type: frameTypes.SPACER_V,
  //   width: 80,
  //   height: 60,
  // },
  {
    icon: "frame",
    type: frameTypes.FRAME,
    columns: 1,
    rows: 1,
  },
  {
    icon: "textbox",
    type: frameTypes.TEXT,
    columns: 2,
    rows: 1,
  },
  {
    icon: "chart",
    type: frameTypes.CHART,
    columns: 2,
    rows: 2,
  },
  {
    icon: "table",
    type: frameTypes.TABLE,
    columns: 3,
    rows: 3,
  },
  {
    icon: "image",
    type: frameTypes.IMAGE,
    columns: 2,
    rows: 2,
  },
];

export {
  ColumnSizer,
  Frame,
  RowSizer,
  frameTypes,
  frameTypesMap,
  getFrameHeight,
  getFrameWidth,
  toolbarConfig,
};
