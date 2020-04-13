import React from "react";
import { Stack } from "@chakra-ui/core";
import Tool from "./Tool";

const Toolbar = ({ tools, ...toolProps }) => {
  return (
    <Stack>
      {tools.map((tool) => (
        <Tool key={tool.type} {...tool} {...toolProps} />
      ))}
    </Stack>
  );
};

export default Toolbar;
