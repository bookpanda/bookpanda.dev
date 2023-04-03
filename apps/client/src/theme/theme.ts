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
    primary: {
      light: colorPalette.default.primary.light,
      main: colorPalette.default.primary.main,
      dark: colorPalette.default.primary.dark,
    },
    secondary: {
      light: colorPalette.default.secondary.light,
      main: colorPalette.default.secondary.main,
      dark: colorPalette.default.secondary.dark,
    },
  },
  breakpoints,
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      light: colorPalette.dark.primary.light,
      main: colorPalette.dark.primary.main,
      dark: colorPalette.dark.primary.dark,
    },
    secondary: {
      light: colorPalette.dark.secondary.light,
      main: colorPalette.dark.secondary.main,
      dark: colorPalette.dark.secondary.dark,
    },
  },
  breakpoints,
});

export const allThemes = {
  default: theme,
  dark: darkTheme,
};
