import React from "react";
import { ThemeProvider } from "@chakra-ui/core";

import ComposerScreen from "./screens/Composer";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ComposerScreen />
    </ThemeProvider>
  );
}

export default App;
