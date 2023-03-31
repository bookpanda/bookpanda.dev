import Layout from "$modules/Layout/Layout";
import { WatchingAnime } from "$modules/WatchingAnime";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const HobbiesPage: NextPage = () => {
  return (
    <Layout header={<p>Hobbies</p>}>
      <div className="mb-20">
        <Typography variant="h4" fontWeight={600} marginBottom={3}>
          Currently Watching
        </Typography>
        <WatchingAnime />
      </div>
      <div className="w-full bg-red-100">s</div>
    </Layout>
  );
};

export default HobbiesPage;
