import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { student } from "../types/interface";

export const getStudentall=createAsyncThunk("student/getStudentall",async(value:string)=>{
    const [byname,bygrade]=await Promise.all([
        axios.get(`http://localhost:8080/student?name_like=${value}`),
        axios.get(`http://localhost:8080/student?grade=${value}`)
    ])
    const merged=[...byname.data,...bygrade.data]
    return merged
})
export const addStudent=createAsyncThunk("student/addStudent",async(newstudent:student)=>{
    const res=await axios.post("http://localhost:8080/student",newstudent);
    return res.data
})
export const deleStudent=createAsyncThunk("student/deleStudent",async(id:number)=>{
    const res=await axios.delete(`http://localhost:8080/student/${id}`);
    return res.data
})
export const updateStudent=createAsyncThunk("student/updateStudent",async(newstudent:student)=>{
    const res=await axios.patch(`http://localhost:8080/student/${newstudent.id}`,newstudent);
    return res.data
})
