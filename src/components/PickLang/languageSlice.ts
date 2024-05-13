import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Languages = "en" | "jp";

export interface LanguageState {
  lang: Languages;
}

const initialState: LanguageState = {
  lang: "jp",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
  },
  selectors: {
    selectLang: (state) => state.lang,
  },
});

export const { setLang } = languageSlice.actions;
export const { selectLang } = languageSlice.selectors;
