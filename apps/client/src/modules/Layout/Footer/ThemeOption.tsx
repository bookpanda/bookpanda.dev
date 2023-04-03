import { Theme, ThemeProvider, Tooltip } from "@mui/material";
import { FC } from "react";
import { useAppContext } from "src/core/contexts";
import { themeOptionsType } from "src/core/contexts/appContext";

interface IThemeOption {
  theme: Theme;
  option: themeOptionsType;
}

export const ThemeOption: FC<IThemeOption> = ({ option, theme }) => {
  const { setThemeOptions } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        arrow
        placement="top"
        title={option.charAt(0).toUpperCase() + option.slice(1)}
      >
        <div
          onClick={() => setThemeOptions(option)}
          role="presentation"
          className="h-8 w-8 bg-blue-100"
        >
          A
        </div>
      </Tooltip>
    </ThemeProvider>
  );
};
