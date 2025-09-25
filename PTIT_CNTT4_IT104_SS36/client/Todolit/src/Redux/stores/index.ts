import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slices/task.slice"
import { useDispatch } from "react-redux";
export const store=configureStore({
    reducer:{task:taskReducer},
    devTools:true,
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export type RootState=ReturnType<typeof store.getState>