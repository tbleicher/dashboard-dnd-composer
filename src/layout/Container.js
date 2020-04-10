import React from "react";
import { Box, Flex } from "@chakra-ui/core";

const Container = ({ bg, children, direction = "column", ...boxProps }) => {
  const rowProps =
    direction === "row"
      ? {
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
        }
      : {};
  return (
    <Flex justify="center" bg={bg}>
      <Box
        {...rowProps}
        {...boxProps}
        width={["90%", "28em", "46em", "60em", "78em"]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Container;
