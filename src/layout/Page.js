import React from "react";
import { Box, Stack, Text } from "@chakra-ui/core";

import { Breadcrumbs, Sidebar } from "components";
import ContainerRow from "./ContainerRow";
import Footer from "./Footer";
import Header from "./Header";

const Title = ({ title }) => {
  return (
    <Box borderBottom="1px" borderColor="brand.700" p={4}>
      <Text color="brand.700" as="h2" m={0}>
        {title}
      </Text>
    </Box>
  );
};
const Page = ({ children, title }) => {
  return (
    <Stack style={{ height: "100vh" }}>
      <Header />

      <Breadcrumbs />
      <ContainerRow>
        <Sidebar />

        {/* TODO: overflow-y settings */}
        <main style={{ flexGrow: 1, overflow: "auto" }}>
          <Title title="Dashboard" />
          <Box id="bodyColumnContainer">{children}</Box>
        </main>
      </ContainerRow>
      <Footer />
    </Stack>
  );
};

export default Page;
