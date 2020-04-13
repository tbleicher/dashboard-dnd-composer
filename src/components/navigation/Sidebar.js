import React from "react";
import { Link, Stack, Text } from "@chakra-ui/core";

import { ReactComponent as Logo } from "./logo.svg";
const MenuItems = ({ active, children }) => {
  if (active) {
    return (
      <Text as="h3" display="block" my={2}>
        {children}
      </Text>
    );
  }
  return (
    <Link display="block" my={2}>
      {children}
    </Link>
  );
};

const Sidebar = (props) => {
  return (
    <Stack as="nav" p={4} bg="brand.100" color="brand.700" {...props}>
      <MenuItems active={true}>Dashboard</MenuItems>
      <MenuItems>About</MenuItems>
      <MenuItems>Blog</MenuItems>
      <div style={{ flexGrow: 1 }} />
      <Logo fill="white" fillOpacity={0.6} />;
    </Stack>
  );
};
Sidebar.defaultProps = {
  width: 120,
};
export default Sidebar;
