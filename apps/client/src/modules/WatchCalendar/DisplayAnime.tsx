import { Typography } from "@mui/material";
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
    <div className="col flex h-full w-1/2 flex-col items-center justify-center">
      {selectedAnime?.image ? (
        <Image
          alt={selectedAnime?.name ?? ""}
          src={selectedAnime?.image ?? ""}
          className="mb-4"
          loader={() => selectedAnime?.image ?? ""}
          style={{
            objectFit: "cover",
            minHeight: "70%",
            minWidth: "30%",
          }}
          width={100}
          height={1000}
        />
      ) : (
        <div className="flex h-2/3 w-1/3 items-center justify-center rounded-lg bg-gray-100">
          <Typography variant="body1" textAlign="center">
            Select Date
            <br /> to see anime
          </Typography>
        </div>
      )}
      {selectedAnime?.name && (
        <>
          <Typography variant="h6" textAlign="center">
            {selectedAnime?.name}
          </Typography>
          <Typography variant="body1">
            {stDay} {stMonth}, {stYear} - {edDay} {edMonth}, {edYear}
          </Typography>
          <Typography variant="h6">Score: {selectedAnime.score}</Typography>
        </>
      )}
    </div>
  );
};
