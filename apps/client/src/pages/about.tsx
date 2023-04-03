import { AboutMe, Links } from "$modules/About";
import { Layout } from "$modules/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout header={<p>About me</p>}>
      <div className="">
        <AboutMe />
        <Links />
      </div>
    </Layout>
  );
};

export default AboutPage;
