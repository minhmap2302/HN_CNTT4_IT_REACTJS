import { createSlice } from "@reduxjs/toolkit";

interface Coutertype{
    value:number,
}
const initialState:Coutertype={value:0};
const Couterslice=createSlice({
    name:"Couter",
    initialState,
    reducers:{
        increment:(state)=>{
               state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        reset:()=>initialState
    }
});
export const {increment,decrement,reset}=Couterslice.actions;
export default Couterslice.reducer