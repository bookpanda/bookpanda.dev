"use client";

import { PageTitle } from "$modules/Layout/PageTitle";
import {
  DisplayAnime,
  SelectYear,
  WatchCalendar,
} from "$modules/WatchCalendar";
import { WatchingAnime } from "$modules/WatchingAnime";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle>
        <p>Hobbies</p>
      </PageTitle>
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
      <Box
        sx={{
          marginBottom: 20,
          height: "80vh",
          display: { xs: "none", xl: "block" },
        }}
      >
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
          <div className="mt-8 flex h-3/5 w-full justify-evenly">
            <SelectYear />
            <DisplayAnime />
          </div>
        </div>
      </Box>
    </>
  );
};

export default IndexPage;
