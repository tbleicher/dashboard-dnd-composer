import React from "react";

import { Composer } from "components";
import { Page, PageTitle } from "layout";

const ComposerScreen = (props) => {
  return (
    <Page>
      <PageTitle action={{ icon: "edit" }} title="Dashboard" />
      <Composer />
    </Page>
  );
};

export default ComposerScreen;
