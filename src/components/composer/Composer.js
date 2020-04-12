import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";

import Canvas from "./Canvas";
import { frameTypes } from "./frames";
import layoutReducer from "./layoutReducer";
import { Toolbar, toolTypes } from "./tools";
import demoLayout from "./demoLayout";

const initialLayout = {
  id: "DASHBOARD-LAYOUT-ID",
  accept: [toolTypes.ADD_ROW],
  children: demoLayout(640),
  type: frameTypes.COLUMN,
};

const Composer = () => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);

  return (
    <DndProvider backend={Backend}>
      <Flex justify="space-between" m={4}>
        <Canvas layout={layout} />
        <Toolbar dispatch={dispatch} />
      </Flex>
    </DndProvider>
  );
};

export default Composer;
