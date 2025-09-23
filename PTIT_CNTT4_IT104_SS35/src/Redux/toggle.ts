import { createSlice } from "@reduxjs/toolkit";

interface togglebg {
  value: boolean;
}
const initialState: togglebg = { value: false };
const toggleslice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
     toggle: (state) => {
      state.value = !state.value; 
    },
  },
});
export const {toggle}=toggleslice.actions;
export default toggleslice.reducer