import { FC } from "react";

import { NavExtLink } from "./NavExtLink";
import { NavLink } from "./NavLink";

export const NavBar: FC = () => {
  return (
    <div className="mt-8 flex w-3/5 justify-around">
      <NavLink text="Home" link="/" />
      <NavLink text="About me" link="/about" />
      <NavExtLink text="Resume" link="https://resume.bookpanda.dev/" />
      <NavLink text="Hobbies" link="/hobbies" />
      <NavLink text="APIs" link="/apis" />
    </div>
  );
};
