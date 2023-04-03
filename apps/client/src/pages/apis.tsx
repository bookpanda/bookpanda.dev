import { Layout } from "$modules/Layout";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const APIPage: NextPage = () => {
  return (
    <Layout header={<p>APIs</p>}>
      <div className="h-[70vh]">
        <Typography>Coming Soon...</Typography>
      </div>
    </Layout>
  );
};

export default APIPage;
