import React from "react";
import { Box, Stack } from "@chakra-ui/core";

import { Breadcrumbs, Sidebar } from "components";
import ContainerRow from "./ContainerRow";
import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";

const Page = ({ children, title }) => {
  return (
    <Stack style={{ height: "100vh" }}>
      <Header />

      <Breadcrumbs />
      <ContainerRow>
        <Sidebar />

        {/* TODO: overflow-y settings */}
        <main style={{ flexGrow: 1, overflow: "auto" }}>{children}</main>
      </ContainerRow>
      <Footer />
    </Stack>
  );
};

export default Page;
