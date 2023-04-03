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
    <div className="col flex h-full w-1/2 flex-col items-center">
      {selectedAnime?.image ? (
        <div className="mb-4 w-1/3">
          <Image
            alt={selectedAnime?.name ?? ""}
            src={selectedAnime?.image ?? ""}
            loader={() => selectedAnime?.image ?? ""}
            style={{
              objectFit: "cover",
              minHeight: "100%",
              minWidth: "100%",
            }}
            width={100}
            height={1000}
          />
        </div>
      ) : (
        <div className="flex h-2/3 w-1/3 items-center justify-center rounded-lg bg-primary.light">
          <Typography variant="body1" textAlign="center" color="secondary.dark">
            Select Date
            <br /> to see anime
          </Typography>
        </div>
      )}
      {selectedAnime?.name && (
        <>
          <Typography variant="h6" textAlign="center" color="secondary.dark">
            {selectedAnime?.name}
          </Typography>
          <Typography variant="body1" color="secondary.dark">
            {stDay} {stMonth}, {stYear} - {edDay} {edMonth}, {edYear}
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            Score: {selectedAnime.score}
          </Typography>
        </>
      )}
    </div>
  );
};
