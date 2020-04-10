import React from "react";
import { Flex } from "@chakra-ui/core";

const ContainerRow = ({ bg, children, ...rowProps }) => {
  return (
    <Flex justify="center" bg={bg} flexGrow={1}>
      <Flex width={["90%", "28em", "46em", "60em", "78em"]}>{children}</Flex>
    </Flex>
  );
};

export default ContainerRow;
