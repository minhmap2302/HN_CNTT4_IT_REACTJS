import { createSlice } from "@reduxjs/toolkit";

interface Randomnumber{
    value:number[];
}
const initialState:Randomnumber={value:[]}
const RandomSlice=createSlice({
    name:"random",
    initialState,
    reducers:{
       random:(state,actions)=>{
             state.value.push(actions.payload);
       }
    }
});
export const {random}=RandomSlice.actions;
export default RandomSlice.reducer;