import { AboutMe, Links } from "$modules/About";
import { Layout } from "$modules/Layout";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta content="Who is bookpanda..." name="description" />
      </Head>
      <Layout header={<p>About me</p>}>
        <div className="">
          <AboutMe />
          <Links />
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
