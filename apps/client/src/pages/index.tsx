import Layout from "$modules/Layout/Layout";
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
      <div className="h-[20vh] w-full bg-blue-400">a</div>
      <div>index</div>
    </Layout>
  );
};

export default IndexPage;
