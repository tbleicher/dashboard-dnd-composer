import { theme } from "@chakra-ui/core";
import icons from "icons";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  colors: {
    ...theme.colors,
    brand: {
      ...theme.colors.green,
    },
  },
  icons: {
    ...theme.icons,
    ...icons,
  },
};

export default customTheme;
