import { FC } from "react";
import { theme } from "src/theme";

import { ThemeOption } from "./ThemeOption";

export const Themes: FC = () => {
  return (
    <div className="mt-2 flex w-1/2 space-x-4 bg-red-100">
      <ThemeOption option="default" theme={theme} />
      <ThemeOption option="dark" theme={theme} />
    </div>
  );
};
