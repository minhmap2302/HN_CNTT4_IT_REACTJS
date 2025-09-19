import {combineReducers, createStore} from "redux"
import { Profile } from "../reducer/bai2.reducer";
import { Couter } from "../reducer/Bai3.reducer";
import { Random } from "../reducer/Bai4.reducer";
import { Change } from "../reducer/Bai5.reducer";
import { Toggle } from "../reducer/Bai6.reducer";
import { accountReducer } from "../reducer/Bai7.reducer";

const resujt=combineReducers({bai2:Profile,bai3:Couter,bai4:Random,bai5:Change,bai6:Toggle,account:accountReducer});
export const store=createStore(resujt);
export type RootState = ReturnType<typeof resujt>;