import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ThemeSliceState {
  theme: "default" | "dark" | "subaru" | "bocchi";
}

const initialState: ThemeSliceState = {
  theme: "default",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<"default" | "dark" | "subaru" | "bocchi">
    ) => {
      state.theme = action.payload;
    },
  },
});
