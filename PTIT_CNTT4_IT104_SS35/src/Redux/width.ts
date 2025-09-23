import { createSlice } from "@reduxjs/toolkit"

interface width{
    value:boolean
}
const initialState:width={value:false}
const widthslice=createSlice({
    name:"width",
    initialState,
    reducers:{
        togglewidth:(state)=>{
            state.value=!state.value
        }
    }
});
export const {togglewidth}=widthslice.actions;
export default widthslice.reducer