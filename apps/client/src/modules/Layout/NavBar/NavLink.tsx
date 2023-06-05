import { Typography, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { theme } from "src/theme";

interface INavLink extends PropsWithChildren {
  text: string;
  link: string;
}

export const NavLink: FC<INavLink> = ({ children, link, text }) => {
  const breakSM = useMediaQuery(theme.breakpoints.up("sm"));
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "px-2 pb-2 sm:pb-0",
        clsx(pathname === link && "border-b-2 border-secondary.light")
      )}
    >
      <Link href={link}>
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
