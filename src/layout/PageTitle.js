import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/core";

const TitleAction = ({ icon, label }) => {
  if (icon) {
    return <Icon color="brand.300" name={icon} size="24px" />;
  }
};

const PageTitle = ({ action, title }) => {
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
      <TitleAction {...action} />
    </Flex>
  );
};

export default PageTitle;
