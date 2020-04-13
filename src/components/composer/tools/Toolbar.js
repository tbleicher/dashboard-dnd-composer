import React from "react";
import { Stack } from "@chakra-ui/core";
import Tool from "./Tool";
import types from "./toolTypes";

const tools = [
  { icon: "row", type: types.ADD_ROW },
  { icon: "column", type: types.ADD_COLUMN },
  { icon: "arrowExpandHorizontal", type: types.ADD_SPACER_H },
  { icon: "arrowExpandVertical", type: types.ADD_SPACER_V },
  { icon: "frame", type: types.ADD_FRAME },
  { icon: "textbox", type: types.ADD_TEXT },
  { icon: "chart", type: types.ADD_CHART },
  { icon: "table", type: types.ADD_TABLE },
  { icon: "image", type: types.ADD_IMAGE },
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
