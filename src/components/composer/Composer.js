import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import layoutReducer, { newElement } from "./layoutReducer";
import { frameTypes } from "./frames";
import toolTypes from "./toolTypes";

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
