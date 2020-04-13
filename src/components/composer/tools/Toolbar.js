import React from "react";
import { Stack } from "@chakra-ui/core";
import Tool from "./Tool";
import types from "./toolTypes";

const tools = [
  { icon: "row", type: types.ADD_ROW },
  { icon: "column", type: types.ADD_COLUMN },
  {
    icon: "arrowExpandHorizontal",
    type: types.ADD_SPACER_H,
    width: 80,
    height: 60,
  },
  {
    icon: "arrowExpandVertical",
    type: types.ADD_SPACER_V,
    width: 80,
    height: 60,
  },
  { icon: "frame", type: types.ADD_FRAME, width: 240, height: 120 },
  { icon: "textbox", type: types.ADD_TEXT, width: 80, height: 60 },
  { icon: "chart", type: types.ADD_CHART, width: 80, height: 60 },
  { icon: "table", type: types.ADD_TABLE, width: 80, height: 60 },
  { icon: "image", type: types.ADD_IMAGE, width: 80, height: 60 },
];

const Toolbar = (props) => {
  return (
    <Stack>
      {tools.map((tool) => (
        <Tool key={tool.type} {...tool} {...props} />
      ))}
    </Stack>
  );
};

export default Toolbar;
