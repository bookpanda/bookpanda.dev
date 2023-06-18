import { PageTitle } from "$modules/Layout/PageTitle";
import { Typography } from "@mui";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle>
        <p>APIs</p>
      </PageTitle>
      <div className="h-[70vh]">
        <Typography color="secondary.dark">Coming Soon...</Typography>
      </div>
    </>
  );
};

export default IndexPage;
