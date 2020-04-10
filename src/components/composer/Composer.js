import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import shortid from "shortid";
import { Flex } from "@chakra-ui/core";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import layoutReducer from "./layoutReducer";

const initialLayout = [
  { id: shortid.generate(), height: 80 },
  { id: shortid.generate(), height: 160 },
];

const Composer = () => {
  const [layout, dispatch] = React.useReducer(layoutReducer, initialLayout);

  return (
    <DndProvider backend={Backend}>
      <Flex>
        <Canvas layout={layout} id={shortid.generate()} />
        <Toolbar dispatch={dispatch} />
      </Flex>
    </DndProvider>
  );
};

export default Composer;
