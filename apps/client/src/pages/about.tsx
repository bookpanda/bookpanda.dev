import { AboutMe } from "$modules/About";
import { Layout } from "$modules/Layout";
import { IconButton, Typography } from "@mui/material";
import clsx from "clsx";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { anilist, github, linkedin } from "public/images";
import { useAppContext } from "src/core/contexts";

const AboutPage: NextPage = () => {
  const { themeOptions } = useAppContext();
  return (
    <Layout header={<p>About me</p>}>
      <div className="h-[70vh]">
        <AboutMe />
        <Typography variant="h4" fontWeight={600} color="secondary.dark">
          Links
        </Typography>
        <div className="flex items-center justify-evenly lg:w-1/3">
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
      </div>
    </Layout>
  );
};

export default AboutPage;
