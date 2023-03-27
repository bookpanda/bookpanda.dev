import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type NavLinkType = {
  text: string;
  link: string;
};

export const NavLink: FC<NavLinkType> = ({ link, text }) => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);
  return (
    <div
      className={clsx(
        "px-2",
        clsx(pathname === link && "border-b-2 border-red-700")
      )}
    >
      <Link href={link}>
        <Typography
          variant="h6"
          fontWeight={pathname === link ? 600 : 400}
          color={pathname === link ? "white" : grey[400]}
        >
          {text}
        </Typography>
      </Link>
    </div>
  );
};
