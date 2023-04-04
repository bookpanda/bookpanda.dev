import { FC } from "react";
import { bocchiTheme, darkTheme, subaruTheme, theme } from "src/theme";

import { ThemeOption } from "./ThemeOption";

export const Themes: FC = () => {
  return (
    <div className="mt-2 flex w-1/2 space-x-4">
      <ThemeOption option="default" theme={theme} />
      <ThemeOption option="dark" theme={darkTheme} />
      <ThemeOption option="subaru" theme={subaruTheme} />
      <ThemeOption option="bocchi" theme={bocchiTheme} />
    </div>
  );
};
