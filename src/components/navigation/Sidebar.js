import React from "react";
import { Link, Stack, Text } from "@chakra-ui/core";

import { ReactComponent as Logo } from "./logo.svg";
const MenuItem = ({ active, children, ...other }) => {
  if (active) {
    return (
      <Text as="h3" display="block" my={2} {...other}>
        {children}
      </Text>
    );
  }
  return (
    <Link display="block" my={2} {...other}>
      {children}
    </Link>
  );
};

const SubMenuItem = (props) => {
  return <MenuItem {...props} ml={4} fontSize="sm" my={1} />;
};

const Sidebar = (props) => {
  return (
    <Stack
      as="nav"
      p={4}
      bg="brand.100"
      color="brand.700"
      flexGrow={0}
      flexShrink={0}
      {...props}
    >
      <MenuItem active={true}>Dashboard</MenuItem>
      <MenuItem fontWeight="bold">Todo:</MenuItem>
      <SubMenuItem>add resize handles</SubMenuItem>
      <SubMenuItem>delete frame</SubMenuItem>
      <SubMenuItem>wrap frame in column/row</SubMenuItem>
      <SubMenuItem>add spacers</SubMenuItem>
      <SubMenuItem>layouts depending on screen size</SubMenuItem>
      <SubMenuItem>add drag-n-drop within layout</SubMenuItem>
      <SubMenuItem>sidebar scroll</SubMenuItem>
      <div style={{ flexGrow: 1 }} />
      <Logo fill="white" fillOpacity={0.6} />;
    </Stack>
  );
};
Sidebar.defaultProps = {
  width: 120,
};
export default Sidebar;
