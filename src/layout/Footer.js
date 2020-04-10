import React from "react";
import { Text, Flex } from "@chakra-ui/core";
import { Container } from "layout";

const Footer = (props) => {
  return (
    <Container bg="brand.900">
      <Flex p={4} justify="space-between">
        <Text color="brand.100" fontSize="sm" m={0}>
          Footer Left
        </Text>

        <Text color="brand.100" fontSize="sm" m={0}>
          Footer Middle
        </Text>

        <Text color="brand.100" fontSize="sm" m={0}>
          Copyright etc.
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
