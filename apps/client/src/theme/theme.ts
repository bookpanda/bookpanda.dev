import { createTheme } from "@mui/material";

import { colorPalette } from "./colors";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffffff",
    },
    primary: {
      main: colorPalette["gray-medium"],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const allThemes = {
  default: theme,
};
