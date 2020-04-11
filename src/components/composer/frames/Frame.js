import React from "react";
import { Box, Icon } from "@chakra-ui/core";

const Frame = ({ width = 80, height = 80 }) => {
  console.log("Frame", width, height);
  return (
    <Box width={width} height={height} bg="brand.100">
      <Icon name="frame" size={12} fill="brand.300" m="6px" />
    </Box>
  );
};

export default Frame;
