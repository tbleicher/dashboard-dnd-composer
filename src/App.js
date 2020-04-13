import React from "react";
import { ThemeProvider } from "@chakra-ui/core";

import DashboardScreen from "./screens/Dashboard";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <DashboardScreen />
    </ThemeProvider>
  );
}

export default App;
