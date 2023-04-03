import { Feed } from "$modules/Feed";
import { Layout } from "$modules/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout
      header={
        <>
          <p className="hidden lg:block">
            Hello there, <br />
            bookpanda here
          </p>
          <p className="lg:hidden">It&apos;s me, bookpanda</p>
        </>
      }
    >
      <Feed></Feed>
      <Feed></Feed>
      <Feed></Feed>
    </Layout>
  );
};

export default IndexPage;
