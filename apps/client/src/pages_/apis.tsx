import { Layout } from "$modules/Layout";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

const APIPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>APIs</title>
        <meta content="My available APIs" name="description" />
      </Head>
      <Layout header={<p>APIs</p>}>
        <div className="h-[70vh]">
          <Typography color="secondary.dark">Coming Soon...</Typography>
        </div>
      </Layout>
    </>
  );
};

export default APIPage;
