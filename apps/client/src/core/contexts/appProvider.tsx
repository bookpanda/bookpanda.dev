import {
  InputMaybe,
  MediaListStatus,
  MediaType,
  useGetBannerQuery,
} from "@bookpanda/codegen";
import { FC, PropsWithChildren } from "react";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const data = useGetBannerQuery({
    variables: {
      userName: "thatpasoknikorn",
      type: "ANIME" as InputMaybe<MediaType>,
      status: "COMPLETED" as InputMaybe<MediaListStatus>,
    },
  });

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};
