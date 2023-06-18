import { Box, Typography } from "@mui";
import { grey } from "@mui/material/colors";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface INavExtLink extends PropsWithChildren {
  text: string;
  link: string;
}

export const NavExtLink: FC<INavExtLink> = ({ children, link, text }) => {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "px-2 pb-2 sm:pb-0",
        clsx(pathname === link && "border-b-2 border-secondary.light")
      )}
    >
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <Typography
          variant="h6"
          fontWeight={pathname === link ? 600 : 400}
          color={pathname === link ? "white" : grey[400]}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {text}
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>{children}</Box>
      </Link>
    </div>
  );
};
