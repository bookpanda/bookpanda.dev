import {
  GetBannerQueryResult,
  GetCompletedAnimeQueryResult,
  GetWatchingAnimeQueryResult,
} from "@bookpanda/codegen";
import { createContext, useContext } from "react";

export type selectedYearType = number | null;
export type selectedAnimeType = {
  name: string;
  image: string;
  st: Date;
  ed: Date;
  score: number;
} | null;

interface IAppContext {
  bannerData: GetBannerQueryResult | null;
  watchingData: GetWatchingAnimeQueryResult | null;
  completedData: GetCompletedAnimeQueryResult | null;
  selectedYear: selectedYearType;
  setSelectedYear: (year: number) => void;
  selectedAnime: selectedAnimeType;
  setSelectedAnime: (anime: selectedAnimeType) => void;
}

export const AppContext = createContext<IAppContext>({
  bannerData: null,
  watchingData: null,
  completedData: null,
  selectedYear: null,
  setSelectedYear: () => null,
  selectedAnime: null,
  setSelectedAnime: () => null,
});

export function useAppContext() {
  return useContext(AppContext);
}
