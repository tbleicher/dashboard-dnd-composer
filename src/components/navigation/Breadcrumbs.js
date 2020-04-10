import React from "react";
import { Flex, Link, Text } from "@chakra-ui/core";
import { Container } from "layout";

const renderBreadcrumbs = (links) => {
  return links
    .reduce((agg, link, index, src) => {
      agg.push(link);
      if (index !== src.length - 1) {
        agg.push("/");
      }
      return agg;
    }, [])
    .map(renderLink);
};

const renderLink = (link, index, arr) => {
  const options = {
    color: index === arr.length - 1 ? "white" : "brand.100",
    key: index,
    m: 0,
    mr: 2,
  };

  if (link === "/") {
    return <Text {...options}>{link}</Text>;
  }

  if (index === arr.length - 1) {
    return <Text {...options}>{link}</Text>;
  }

  return <Link {...options}>{link}</Link>;
};

const Breadcrumbs = (props) => {
  const links = ["Full", "Breadcrumbs", "Path"];

  return (
    <Container bg="brand.900">
      <Flex p={4}>{renderBreadcrumbs(links)}</Flex>
    </Container>
  );
};

export default Breadcrumbs;
