import React from "react";
import { Button, Icon } from "@chakra-ui/core";
import { Composer } from "components";
import { Page, PageHeader } from "layout";
import { LayoutContext, LayoutContextProvider, actions } from "context/layout";

const TitleAction = ({ icon, label }) => {
  const { state, dispatch } = React.useContext(LayoutContext);

  if (state.editMode) {
    return (
      <Button
        onClick={() => dispatch(actions.saveLayout())}
        size="sm"
        variantColor="brand"
        variant="solid"
      >
        Save
      </Button>
    );
  }

  return (
    <Icon
      onClick={() => dispatch(actions.editLayout())}
      color="brand.300"
      name="edit"
      size="24px"
    />
  );
};

const ComposerScreen = (props) => {
  return (
    <Page>
      <LayoutContextProvider>
        <PageHeader title="Dashboard">
          <TitleAction />
        </PageHeader>
        <Composer />
      </LayoutContextProvider>
    </Page>
  );
};

export default ComposerScreen;
