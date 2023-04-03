import { Layout } from "$modules/Layout";
import {
  DisplayAnime,
  SelectYear,
  WatchCalendar,
} from "$modules/WatchCalendar";
import { WatchingAnime } from "$modules/WatchingAnime";
import { Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import { theme } from "src/theme";

const HobbiesPage: NextPage = () => {
  const breakLG = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Layout header={<p>Hobbies</p>}>
      <div className="mb-20">
        <Typography
          variant="h4"
          fontWeight={600}
          marginBottom={3}
          color="secondary.dark"
        >
          Currently Watching
        </Typography>
        <WatchingAnime />
      </div>
      {breakLG && (
        <div className="mb-40 h-[70vh] w-full">
          <Typography
            variant="h4"
            fontWeight={600}
            marginBottom={3}
            color="secondary.dark"
          >
            Anime Watch History
          </Typography>
          <WatchCalendar />
          <div className="mt-8 flex h-[50vh] w-full justify-evenly">
            <SelectYear />
            <DisplayAnime />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HobbiesPage;
