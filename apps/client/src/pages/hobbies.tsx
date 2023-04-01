import Layout from "$modules/Layout/Layout";
import {
  DisplayAnime,
  SelectYear,
  WatchCalendar,
} from "$modules/WatchCalendar";
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
      <div className="h-[60vh] w-full">
        <WatchCalendar />
        <div className="mt-8 flex h-[40vh] w-full justify-evenly">
          <SelectYear />
          <DisplayAnime />
        </div>
      </div>
    </Layout>
  );
};

export default HobbiesPage;
