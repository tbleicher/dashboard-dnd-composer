import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/core";

import { ReactComponent as Logo } from "./logo.svg";
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Sidebar = (props) => {
  return (
    <Stack as="nav" padding="1rem" bg="brand.500" color="white" {...props}>
      <Heading as="h2" size="lg" mt={0}>
        Main Nav
      </Heading>
      <Box
        display="block"
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        BoxGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>
      <div style={{ flexGrow: 1 }} />
      <Logo fill="white" fillOpacity={0.6} />;
    </Stack>
  );
};
Sidebar.defaultProps = {
  width: 120,
};
export default Sidebar;
