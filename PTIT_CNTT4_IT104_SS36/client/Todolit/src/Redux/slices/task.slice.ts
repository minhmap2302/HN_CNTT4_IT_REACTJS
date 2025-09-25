import { createSlice } from "@reduxjs/toolkit";
import type { init } from "../../types/interface";
import {
  ADDTASK,
  DELETETASK,
  getAllTask,
  UPDATETASK,
} from "../../Api/task.api";

const initialState: init = {
  status: "idle",
  data: [],
  error: null,
};
const taskslice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTask.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(ADDTASK.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(DELETETASK.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.filter((e) => e.id !== action.payload);
      })
      .addCase(UPDATETASK.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.map((e) =>
          e.id === action.payload.id ? { ...e, ...action.payload } : e
        );
      });
  },
});
export default taskslice.reducer;
