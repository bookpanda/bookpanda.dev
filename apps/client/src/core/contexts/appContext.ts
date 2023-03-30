import { GetAnimeQueryResult, GetBannerQueryResult } from "@bookpanda/codegen";
import { createContext, useContext } from "react";

interface IAppContext {
  bannerData: GetBannerQueryResult | null;
  watchingData: GetAnimeQueryResult | null;
}

export const AppContext = createContext<IAppContext>({
  bannerData: null,
  watchingData: null,
});

export function useAppContext() {
  return useContext(AppContext);
}
