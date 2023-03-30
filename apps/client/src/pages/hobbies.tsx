import Layout from "$modules/Layout/Layout";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const HobbiesPage: NextPage = () => {
  return (
    <Layout header={<p>Hobbies</p>}>
      <div>
        <Typography variant="h3" fontWeight={600}>
          Currently Watching
        </Typography>
      </div>
    </Layout>
  );
};

export default HobbiesPage;
