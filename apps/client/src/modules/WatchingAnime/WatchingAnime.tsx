import { Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useAppContext } from "src/core/contexts";

type DataType =
  | {
      episodes: number;
      progress: number;
      title: string;
      image: string;
    }[]
  | null;

export const WatchingAnime = () => {
  const { watchingData } = useAppContext();
  const data = useRef<DataType>(null);
  const lists = watchingData?.data?.MediaListCollection?.lists;
  if (lists) {
    const entries = lists[0]?.entries;
    if (entries) {
      const a: DataType = [];
      entries.map((e) => {
        a.push({
          episodes: e?.media?.episodes ?? 0,
          progress: e?.progress ?? 0,
          title:
            e?.media?.title?.english ?? e?.media?.title?.userPreferred ?? "",
          image: e?.media?.coverImage?.large ?? "",
        });
      });
      data.current = a;
    }
  }
  return (
    <div className="flex flex-col justify-evenly md:flex-row">
      {data.current ? (
        data.current.map((d) => (
          <div
            key={d.title}
            className="w-1/8 mb-10 flex flex-col items-center justify-between"
          >
            <Image
              src={d.image}
              width={200}
              height={200}
              //   style={{
              //     objectFit: "cover",
              //     minHeight: "100%",
              //     minWidth: "100%",
              //   }}
              alt="animebanner"
              loader={() => d.image}
              className="mb-4"
            />
            <Typography variant="h6" textAlign="center">
              {d.title}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Episode: {d.progress} / {d.episodes}
            </Typography>
          </div>
        ))
      ) : (
        <Skeleton width={800} height={600} />
      )}
    </div>
  );
};
