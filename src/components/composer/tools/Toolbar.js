import React from "react";
import { Stack } from "@chakra-ui/core";
import Tool from "./Tool";
import { frameTypes } from "../frames";

const tools = [
  { icon: "row", type: frameTypes.ROW },
  { icon: "column", type: frameTypes.COLUMN },
  {
    icon: "arrowExpandHorizontal",
    type: frameTypes.SPACER_H,
    width: 80,
    height: 60,
  },
  {
    icon: "arrowExpandVertical",
    type: frameTypes.SPACER_V,
    width: 80,
    height: 60,
  },
  { icon: "frame", type: frameTypes.FRAME, width: 240, height: 120 },
  { icon: "textbox", type: frameTypes.TEXT, width: 80, height: 60 },
  { icon: "chart", type: frameTypes.CHART, width: 80, height: 60 },
  { icon: "table", type: frameTypes.TABLE, width: 80, height: 60 },
  { icon: "image", type: frameTypes.IMAGE, width: 80, height: 60 },
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
