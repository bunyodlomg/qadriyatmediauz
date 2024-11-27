// Redux Toolkit'dan foydalanamiz
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Boshlang'ich holat
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLightMode: (state) => {
      state.theme = "light";
    },
    setDarkMode: (state) => {
      state.theme = "dark";
    },
  },
});

export const { toggleTheme, setLightMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
