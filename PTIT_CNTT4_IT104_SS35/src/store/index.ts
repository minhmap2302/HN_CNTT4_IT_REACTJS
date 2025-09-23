import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../Redux/couter"
import RandomReducer from "../Redux/Random"
import toggleReducer from "../Redux/toggle"
import loginReducer from "../Redux/Login"
import togglewidthReducer from "../Redux/width"
import modereducer from "../Redux/mode"
import languereducer from "../Redux/Langue"
import likeReducer from "../Redux/listlike"
export const store=configureStore({
    reducer:{couter:couterReducer,random:RandomReducer,toggle:toggleReducer,togglewidth:togglewidthReducer,login:loginReducer,mode:modereducer,langue:languereducer,like:likeReducer},
    devTools:true
});
export type RootState=ReturnType <typeof store.getState>;
export type RootDispatch=typeof store.dispatch;