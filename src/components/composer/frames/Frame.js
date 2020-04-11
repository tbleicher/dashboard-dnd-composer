import React from "react";
import { Flex, Icon } from "@chakra-ui/core";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "../constants";

const Frame = ({
  layout,
  width = GRID_COLUMN_WIDTH,
  height = GRID_ROW_HEIGHT,
}) => {
  console.log("F", layout.id, width, height);
  return (
    <Flex
      bg="brand.100"
      align="center"
      justify="center"
      width={`${width}px`}
      height={`${height}px`}
    >
      <Icon name="frame" size={12} fill="brand.300" />
    </Flex>
  );
};

export default Frame;
