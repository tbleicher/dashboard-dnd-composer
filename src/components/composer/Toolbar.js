import React from "react";
import { Box, Icon, Stack } from "@chakra-ui/core";

const Tool = ({ icon }) => {
  return (
    <Box
      borderColor="brand.200"
      borderWidth="1px"
      rounded="lg"
      bg="brand.200"
      p={2}
      mb={2}
    >
      <Icon name={icon} size={8} />
    </Box>
  );
};

const Toolbar = () => {
  return (
    <Stack m={2}>
      <Tool icon="row" />
      <Tool icon="column" />
      <Tool icon="arrowExpandHorizontal" />
      <Tool icon="arrowExpandVertical" />
      <Tool icon="frame" />
      <Tool icon="textbox" />
      <Tool icon="chart" />
      <Tool icon="table" />
      <Tool icon="image" />
    </Stack>
  );
};

export default Toolbar;
