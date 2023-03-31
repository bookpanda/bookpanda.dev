import Layout from "$modules/Layout/Layout";
import { IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { anilist, github, linkedin } from "public/images";

const AboutPage: NextPage = () => {
  return (
    <Layout header={<p>About me</p>}>
      <div className="h-[70vh]">
        <Typography variant="h3" fontWeight={600}>
          Who am I?
        </Typography>
        <Typography variant="h6" fontWeight={300} marginBottom={10}>
          I am Idhibhat Pankam, currently a freshmen at Computer Engineering,
          Chulalongkorn University.
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          Links
        </Typography>
        <div className="flex items-center justify-evenly lg:w-1/3">
          <Link
            href={"https://github.com/bookpanda"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton sx={{ marginTop: 2 }} size="large">
              <Image alt="github" src={github} height={40} width={40} />
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
