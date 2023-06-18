import { Divider, Paper, ThemeProvider, Tooltip, Typography } from "@mui";
import { Theme } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { themeOptionsType } from "src/core/contexts/appContext";
import { themeSlice } from "src/core/redux";

interface IThemeOption {
  theme: Theme;
  option: themeOptionsType;
}

export const ThemeOption: FC<IThemeOption> = ({ option, theme }) => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        arrow
        placement="top"
        title={option.charAt(0).toUpperCase() + option.slice(1)}
      >
        <Paper
          onClick={() => {
            dispatch(themeSlice.actions.setTheme(option));
          }}
          sx={{
            padding: 1,
            paddingTop: 2,
            paddingRight: 2,
            backgroundColor: "primary.main",
            ":hover": { cursor: "pointer" },
            color: "secondary.dark",
          }}
        >
          <Typography fontWeight={600}>A</Typography>
          <Divider sx={{ backgroundColor: "secondary.light", height: 0.1 }} />
        </Paper>
      </Tooltip>
    </ThemeProvider>
  );
};
