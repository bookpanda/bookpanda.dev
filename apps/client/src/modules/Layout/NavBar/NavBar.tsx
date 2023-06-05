import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApiIcon from "@mui/icons-material/Api";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { NavExtLink } from "./NavExtLink";
import { NavLink } from "./NavLink";

export const NavBar: FC = () => {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex w-full justify-around md:w-3/5">
      <NavLink text="Home" link="/">
        <HomeIcon sx={{ color: pathname === "/" ? "white" : grey[400] }} />
      </NavLink>
      <NavLink text="About" link="/about">
        <AccountCircleIcon
          sx={{ color: pathname === "/about" ? "white" : grey[400] }}
        />
      </NavLink>
      <NavExtLink text="Resume" link="https://resume.bookpanda.dev/">
        <FolderSharedIcon sx={{ color: grey[400] }} />
      </NavExtLink>
      <NavLink text="Hobbies" link="/hobbies">
        <LiveTvIcon
          sx={{ color: pathname === "/hobbies" ? "white" : grey[400] }}
        />
      </NavLink>
      <NavLink text="APIs" link="/apis">
        <ApiIcon sx={{ color: pathname === "/apis" ? "white" : grey[400] }} />
      </NavLink>
    </div>
  );
};
