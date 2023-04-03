import {
  InputMaybe,
  MediaListStatus,
  MediaType,
  ScoreFormat,
  useGetBannerQuery,
  useGetCompletedAnimeQuery,
  useGetWatchingAnimeQuery,
} from "@bookpanda/codegen";
import { FC, PropsWithChildren, useState } from "react";

import { AppContext, selectedAnimeType, selectedYearType } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const bannerData = useGetBannerQuery({
    variables: {
      userName: "thatpasoknikorn",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "COMPLETED" as InputMaybe<MediaListStatus>,
    },
  });
  const watchingData = useGetWatchingAnimeQuery({
    variables: {
      userName: "bookpanda",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "CURRENT" as InputMaybe<MediaListStatus>,
    },
  });
  const completedData = useGetCompletedAnimeQuery({
    variables: {
      userName: "bookpanda",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "COMPLETED" as InputMaybe<MediaListStatus>,
      format: "POINT_10_DECIMAL" as InputMaybe<ScoreFormat>,
    },
  });

  const [theme, setTheme] = useState<string>("light");
  const [selectedYear, setSelectedYear] = useState<selectedYearType>(2023);
  const [selectedAnime, setSelectedAnime] = useState<selectedAnimeType>({
    name: "",
    image: "",
    st: new Date(),
    ed: new Date(),
    score: 0,
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        bannerData,
        watchingData,
        completedData,
        selectedAnime,
        setSelectedAnime,
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
