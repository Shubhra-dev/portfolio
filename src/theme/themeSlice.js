import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.darkTheme) state.darkTheme = false;
      else state.darkTheme = true;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
