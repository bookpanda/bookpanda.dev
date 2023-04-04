import {
  Divider,
  Paper,
  Theme,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useAppContext } from "src/core/contexts";
import { themeOptionsType } from "src/core/contexts/appContext";

interface IThemeOption {
  theme: Theme;
  option: themeOptionsType;
}

export const ThemeOption: FC<IThemeOption> = ({ option, theme }) => {
  const { handleThemeOptions } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        arrow
        placement="top"
        title={option.charAt(0).toUpperCase() + option.slice(1)}
      >
        <Paper
          onClick={() => handleThemeOptions(option)}
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
