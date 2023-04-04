import { IconButton, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { anilist, github, linkedin } from "public/images";
import React from "react";
import { useAppContext } from "src/core/contexts";

export const Links = () => {
  const { themeOptions } = useAppContext();
  return (
    <>
      <Typography variant="h4" fontWeight={600} color="secondary.dark">
        Links
      </Typography>
      <div className="mt-4 flex items-center justify-evenly rounded-lg bg-primary.light pb-2 transition-all lg:w-1/3">
        <Link
          href={"https://github.com/bookpanda"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ marginTop: 2 }} size="large">
            <Image
              alt="github"
              src={github}
              height={40}
              width={40}
              className={clsx(
                themeOptions === "dark" && "rounded-3xl bg-secondary.dark"
              )}
            />
          </IconButton>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/idhibhat-pankam"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ marginTop: 2 }} size="large">
            <Image alt="linkedin" src={linkedin} height={400} width={100} />
          </IconButton>
        </Link>
        <Link
          href={"https://anilist.co/user/bookpanda"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ marginTop: 2 }} size="large">
            <div className="bg-gray-800">
              <Image alt="anilist" src={anilist} height={40} width={40} />
            </div>
          </IconButton>
        </Link>
      </div>
    </>
  );
};
