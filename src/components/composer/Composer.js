import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Flex } from "@chakra-ui/core";
import { LayoutContext } from "context/layout";

import Canvas from "./Canvas";
import { frameTypes, toolbarConfig } from "./frames";
import layoutReducer, { demoLayout } from "reducers/layout";
import { Toolbar } from "./tools";

const initialLayout = {
  id: "DASHBOARD-LAYOUT-ID",
  accept: [frameTypes.ROW],
  children: demoLayout(640),
  type: frameTypes.COLUMN,
};

const Composer = (props) => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);
  const { state: layoutState } = React.useContext(LayoutContext);
  const { editMode } = layoutState;

  return (
    <DndProvider backend={Backend}>
      <Flex justify="space-between" m={4}>
        <Canvas {...props} layout={layout} />
        {editMode && <Toolbar dispatch={dispatch} tools={toolbarConfig} />}
      </Flex>
    </DndProvider>
  );
};

Composer.defaultProps = {
  layoutOptions: {
    availableColumns: 8,
    gridColumnWidth: 80,
    gridRowHeight: 60,
    targetHeight: 16,
    targetWidth: 16,
  },
  columns: 8,
};

export default Composer;
