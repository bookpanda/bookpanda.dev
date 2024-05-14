import { languageSlice } from "@/components/PickLang/languageSlice";
import { projectSlice } from "@/components/Project/projectSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineSlices(languageSlice, projectSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
