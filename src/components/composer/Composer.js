import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";

import Canvas from "./Canvas";
import { frameTypes } from "./frames";
import layoutReducer, { demoLayout } from "reducers/layout";
import { Toolbar, toolTypes } from "./tools";

const initialLayout = {
  id: "DASHBOARD-LAYOUT-ID",
  accept: [toolTypes.ADD_ROW],
  children: demoLayout(640),
  type: frameTypes.COLUMN,
};

const Composer = (props) => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);

  return (
    <DndProvider backend={Backend}>
      <Flex justify="space-between" m={4}>
        <Canvas {...props} layout={layout} />
        <Toolbar dispatch={dispatch} />
      </Flex>
    </DndProvider>
  );
};

Composer.defaultProps = {
  layoutOptions: {
    gridColumnWidth: 80,
    gridRowHeight: 60,
    targetHeight: 16,
    targetWidth: 16,
  },
  width: 640,
};

export default Composer;
