import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApiIcon from "@mui/icons-material/Api";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { FC } from "react";

import { NavExtLink } from "./NavExtLink";
import { NavLink } from "./NavLink";

export const NavBar: FC = () => {
  return (
    <div className="mt-8 flex w-full justify-around md:w-3/5">
      <NavLink text="Home" link="/">
        <HomeIcon color="secondary" />
      </NavLink>
      <NavLink text="About" link="/about">
        <AccountCircleIcon color="secondary" />
      </NavLink>
      <NavExtLink text="Resume" link="https://resume.bookpanda.dev/">
        <FolderSharedIcon color="secondary" />
      </NavExtLink>
      <NavLink text="Hobbies" link="/hobbies">
        <LiveTvIcon color="secondary" />
      </NavLink>
      <NavLink text="APIs" link="/apis">
        <ApiIcon color="secondary" />
      </NavLink>
    </div>
  );
};
