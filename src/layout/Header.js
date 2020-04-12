import React from "react";
import { Heading, Icon, Flex, Button } from "@chakra-ui/core";
import Container from "./Container";

const Header = (props) => {
  return (
    <Container width="100vw">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p={4}
        {...props}
        mb={0}
      >
        <Heading as="h1" color="brand.500" size="lg" m={1} ml={0}>
          DnD Composer
        </Heading>

        <Flex align="center">
          <Button color="brand.500" variant="outline" size="sm" mr={4}>
            sign in
          </Button>
          <Icon fill="brand.300" name="userCircleOutline" size="40px" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
