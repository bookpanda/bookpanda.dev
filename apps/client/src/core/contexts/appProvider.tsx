import {
  InputMaybe,
  MediaListStatus,
  MediaType,
  useGetAnimeQuery,
  useGetBannerQuery,
} from "@bookpanda/codegen";
import { FC, PropsWithChildren } from "react";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const bannerData = useGetBannerQuery({
    variables: {
      userName: "thatpasoknikorn",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "COMPLETED" as InputMaybe<MediaListStatus>,
    },
  });
  const watchingData = useGetAnimeQuery({
    variables: {
      userName: "bookpanda",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "CURRENT" as InputMaybe<MediaListStatus>,
    },
  });

  return (
    <AppContext.Provider value={{ bannerData, watchingData }}>
      {children}
    </AppContext.Provider>
  );
};
