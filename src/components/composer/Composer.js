import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";

import Canvas from "./Canvas";
import { frameTypes } from "./frames";
import layoutReducer, { newElement } from "./layoutReducer";
import { Toolbar, toolTypes } from "./tools";

const initialLayout = {
  id: "DASHBOARD-LAYOUT-ID",
  accept: [toolTypes.ADD_ROW],
  children: [newElement(frameTypes.ROW), newElement(frameTypes.ROW)],
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
