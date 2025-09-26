import { createSlice } from "@reduxjs/toolkit";
import type { init } from "../../types/interface";
import { addStudent, deleStudent, getStudentall, updateStudent } from "../../API/student.api";
const initialState:init={status:"idle",data:[],error:null}
const studentRedux=createSlice({
    name:"student",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getStudentall.pending,(state)=>{
            state.status="pending"
        })
        .addCase(getStudentall.fulfilled,(state,action)=>{
            state.status="success"
            state.data=action.payload
        })
        .addCase(getStudentall.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
        .addCase(addStudent.fulfilled,(state,action)=>{
            state.status="success"
            state.data.push(action.payload);
        })
        .addCase(deleStudent.fulfilled,(state,action)=>{
            state.status="success"
            state.data=state.data.filter((e)=>e.id!==action.payload)
        })
        .addCase(updateStudent.fulfilled,(state,action)=>{
                state.data.map((e)=>e.id==action.payload.id ? {...e,...action.payload}:e);
        })
    },
})
export default studentRedux.reducer