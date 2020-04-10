import React from "react";
import { Flex } from "@chakra-ui/core";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";

const Composer = () => {
  return (
    <Flex>
      <Canvas />
      <Toolbar />
    </Flex>
  );
};

export default Composer;
