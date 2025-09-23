import { createSlice } from "@reduxjs/toolkit";
const initialState: { value: string } = {
  value: "English",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.value = "English";
    },
    setVietnamese: (state) => {
      state.value = "Vietnamese";
    },
  },
});

export default languageSlice.reducer;
export const { setEnglish } = languageSlice.actions;
export const { setVietnamese } = languageSlice.actions;