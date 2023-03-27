import { GetBannerQueryResult } from "@bookpanda/codegen";
import { createContext, useContext } from "react";

interface IAppContext {
  data: GetBannerQueryResult | null;
}

export const AppContext = createContext<IAppContext>({
  data: null,
});

export function useAppContext() {
  return useContext(AppContext);
}
