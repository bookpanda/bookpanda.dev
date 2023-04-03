import { createTheme } from "@mui/material";

import { colorPalette } from "./colors";

const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffffff",
    },
    primary: {
      main: colorPalette["gray-medium"],
    },
  },
  breakpoints,
});

export const allThemes = {
  default: theme,
  dark: theme,
};
