import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type NavExtLinkType = {
  text: string;
  link: string;
};

export const NavExtLink: FC<NavExtLinkType> = ({ link, text }) => {
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
      <Link href={link} rel="noopener noreferrer" target="_blank">
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
