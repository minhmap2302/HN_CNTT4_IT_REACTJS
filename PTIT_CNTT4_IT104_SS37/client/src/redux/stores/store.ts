import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../slices/student.redux";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {student:studentReducer},
  devTools: true,
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export type RootState=ReturnType<typeof store.getState>
