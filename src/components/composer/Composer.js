import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import shortid from "shortid";
import { Flex } from "@chakra-ui/core";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import layoutReducer from "./layoutReducer";
import frameTypes from "./frameTypes";

const initialLayout = [
  { id: shortid.generate(), height: 80, children: [], type: frameTypes.ROW },
  { id: shortid.generate(), height: 160, children: [], type: frameTypes.ROW },
];

const Composer = () => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);

  return (
    <DndProvider backend={Backend}>
      <Flex>
        <Canvas layout={layout} id="DASHBOARD-LAYOUT-ID" />
        <Toolbar dispatch={dispatch} />
      </Flex>
    </DndProvider>
  );
};

export default Composer;
