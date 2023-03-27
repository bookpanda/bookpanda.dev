import Layout from "$modules/Layout/Layout";
import { Feed } from "$modules/index";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout
      header={
        <p>
          Hello there, <br />
          bookpanda here
        </p>
      }
    >
      <Feed></Feed>
    </Layout>
  );
};

export default IndexPage;
