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

export const subaruTheme = createTheme({
  palette: {
    primary: {
      light: colorPalette.subaru.primary.light,
      main: colorPalette.subaru.primary.main,
      dark: colorPalette.subaru.primary.dark,
    },
    secondary: {
      light: colorPalette.subaru.secondary.light,
      main: colorPalette.subaru.secondary.main,
      dark: colorPalette.subaru.secondary.dark,
    },
  },
  breakpoints,
});

export const bocchiTheme = createTheme({
  palette: {
    primary: {
      light: colorPalette.bocchi.primary.light,
      main: colorPalette.bocchi.primary.main,
      dark: colorPalette.bocchi.primary.dark,
    },
    secondary: {
      light: colorPalette.bocchi.secondary.light,
      main: colorPalette.bocchi.secondary.main,
      dark: colorPalette.bocchi.secondary.dark,
    },
  },
  breakpoints,
});

export const allThemes = {
  default: theme,
  dark: darkTheme,
  subaru: subaruTheme,
  bocchi: bocchiTheme,
};
