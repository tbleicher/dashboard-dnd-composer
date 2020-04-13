import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/core";

const PageTitle = ({ children, title }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderBottom="1px"
      borderColor="brand.700"
      p={4}
    >
      <Text color="brand.700" as="h2" m={0}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default PageTitle;
