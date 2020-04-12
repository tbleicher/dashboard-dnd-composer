import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";

import Canvas from "./Canvas";
import { frameTypes } from "./frames";
import layoutReducer, { newElement } from "./layoutReducer";
import { Toolbar, toolTypes } from "./tools";

const row1 = newElement(frameTypes.ROW, { id: "row1" });
const row2 = newElement(frameTypes.ROW, { id: "row2" });
const frame1 = newElement(frameTypes.FRAME, {
  id: "frame1",
  width: 160,
  height: 120,
});
const frame2 = newElement(frameTypes.FRAME, { id: "frame2" });
const frame3 = newElement(frameTypes.FRAME, { id: "frame3", height: 120 });
const frame4 = newElement(frameTypes.FRAME, {
  id: "frame4",
  width: 160,
  height: 60,
});
const col1 = newElement(frameTypes.COLUMN, { id: "col1" });
row1.children = [frame1, frame2, frame3, col1];
row2.children = [frame4];

const initialLayout = {
  id: "DASHBOARD-LAYOUT-ID",
  accept: [toolTypes.ADD_ROW],
  children: [row1, row2],
  type: frameTypes.COLUMN,
};

const Composer = () => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);

  return (
    <DndProvider backend={Backend}>
      <Flex>
        <Canvas layout={layout} />
        <Toolbar dispatch={dispatch} />
      </Flex>
    </DndProvider>
  );
};

export default Composer;
