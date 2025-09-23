import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean } = {
  value: true,
};

const modeSlices = createSlice({
  name: "mode",
  initialState,
  reducers: {
    mode: (state) => {
      state.value = !state.value;
    },
  },
});
export default modeSlices.reducer;
export const { mode } = modeSlices.actions;