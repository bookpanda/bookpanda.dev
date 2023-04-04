import { Layout } from "$modules/Layout";
import {
  DisplayAnime,
  SelectYear,
  WatchCalendar,
} from "$modules/WatchCalendar";
import { WatchingAnime } from "$modules/WatchingAnime";
import { Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { theme } from "src/theme";

const HobbiesPage: NextPage = () => {
  const breakLG = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Head>
        <title>My hobbies</title>
        <meta content="App description" name="description" />
      </Head>
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
          <div className="mb-40 h-[80vh] w-full">
            <Typography
              variant="h4"
              fontWeight={600}
              marginBottom={3}
              color="secondary.dark"
            >
              Anime Watch History
            </Typography>
            <div className="h-[80vh] rounded-lg bg-primary.light p-6 transition-all">
              <WatchCalendar />
              <div className="mt-8 flex h-4/5 w-full justify-evenly">
                <SelectYear />
                <DisplayAnime />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default HobbiesPage;
