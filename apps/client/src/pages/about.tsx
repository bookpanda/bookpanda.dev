import Layout from "$modules/Layout/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout header={<p>About me</p>}>
      <div>About</div>
    </Layout>
  );
};

export default AboutPage;
