import { combineReducers, createStore } from "redux";
import { reducer } from "../Reducer/Todolist.reducer";

const Rootdata=combineReducers({todolist:reducer});
export const store=createStore(Rootdata);
export type RootState = ReturnType<typeof Rootdata>;