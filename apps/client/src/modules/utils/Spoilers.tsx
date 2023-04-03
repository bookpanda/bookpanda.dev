import { Typography } from "@mui/material";
import clsx from "clsx";
import { FC, PropsWithChildren, useState } from "react";
import { theme } from "src/theme";

interface ISpoilers extends PropsWithChildren {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
}

export const Spoilers: FC<ISpoilers> = ({ children, variant }) => {
  const [spoil, setSpoil] = useState(false);
  return (
    <div
      className={clsx(
        "inline rounded-md p-1 transition-all hover:cursor-pointer",
        spoil ? "bg-transparent" : "bg-gray-medium"
      )}
      onClick={() => setSpoil((s) => !s)}
      role="presentation"
    >
      <Typography
        variant={variant}
        display="inline"
        color={theme.palette.primary.main}
      >
        {children}
      </Typography>
    </div>
  );
};
