import { Typography, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { theme } from "src/theme";

interface INavExtLink extends PropsWithChildren {
  text: string;
  link: string;
}

export const NavExtLink: FC<INavExtLink> = ({ children, link, text }) => {
  const breakSM = useMediaQuery(theme.breakpoints.up("sm"));
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);
  return (
    <div
      className={clsx(
        "px-2 pb-2 sm:pb-0",
        clsx(pathname === link && "border-b-2 border-secondary.light")
      )}
    >
      <Link href={link} rel="noopener noreferrer" target="_blank">
        {breakSM ? (
          <Typography
            variant="h6"
            fontWeight={pathname === link ? 600 : 400}
            color={pathname === link ? "white" : grey[400]}
          >
            {text}
          </Typography>
        ) : (
          children
        )}
      </Link>
    </div>
  );
};
