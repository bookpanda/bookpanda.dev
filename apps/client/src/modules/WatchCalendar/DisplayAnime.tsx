"use client";

import { Typography } from "@mui";
import Image from "next/image";
import { useAppContext } from "src/core/contexts";

import { monthNames } from "./WatchCalendar";

export const DisplayAnime = () => {
  const { selectedAnime } = useAppContext();
  const stDay = selectedAnime?.st.getDate();
  const stMonth = monthNames[selectedAnime?.st.getMonth() ?? 0];
  const stYear = selectedAnime?.st.getFullYear();
  const edDay = selectedAnime?.ed.getDate();
  const edMonth = monthNames[selectedAnime?.ed.getMonth() ?? 0];
  const edYear = selectedAnime?.ed.getFullYear();
  return (
    <div className="col flex h-full w-1/2">
      {selectedAnime?.image ? (
        <div className="mb-4 h-full w-1/3">
          <Image
            alt={selectedAnime?.name ?? ""}
            src={selectedAnime?.image ?? ""}
            loader={() => selectedAnime?.image ?? ""}
            style={{
              objectFit: "cover",
              // minHeight: "100%",
              minWidth: "100%",
            }}
            width={100}
            height={1000}
          />
        </div>
      ) : (
        <div className="flex h-4/5 w-1/3 items-center justify-center rounded-lg bg-primary.main">
          <Typography
            variant="h6"
            textAlign="center"
            color="primary.dark"
            fontWeight={400}
          >
            Select Date
            <br /> to see anime
          </Typography>
        </div>
      )}
      {selectedAnime?.name && (
        <div className="ml-8 w-1/2">
          <Typography
            variant="h5"
            textAlign="start"
            color="secondary.dark"
            fontWeight={500}
          >
            {selectedAnime?.name}
          </Typography>
          <Typography variant="body1" textAlign="start" color="secondary.dark">
            {stDay} {stMonth}, {stYear} - {edDay} {edMonth}, {edYear}
          </Typography>
          <Typography
            variant="h3"
            color="secondary.dark"
            textAlign="start"
            marginTop={4}
            fontWeight={500}
          >
            {selectedAnime.score} / 10
          </Typography>
        </div>
      )}
    </div>
  );
};
