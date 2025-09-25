import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { todo } from "../types/interface";


export const getAllTask = createAsyncThunk(
  "todo/getAlltask",
  async (input: string) => {
    const [byName, byCompleted, byPriority] = await Promise.all([
      axios.get(`http://localhost:8080/Todolist?taskName_like=${input}`),
      axios.get(`http://localhost:8080/Todolist?completed=${input}`),
      axios.get(`http://localhost:8080/Todolist?priority=${input}`),
    ]);
    const merged = [...byName.data, ...byCompleted.data, ...byPriority.data];
    return merged;
  }
);
export const ADDTASK=createAsyncThunk("todo/ADDTASK",async(newtask:todo)=>{
    const reponse=axios.post("http://localhost:8080/Todolist",newtask);
    return (await reponse).data
})
export const UPDATETASK=createAsyncThunk("todo/UPDATETASK",async(newtask:todo)=>{
    const reponse=axios.patch(`http://localhost:8080/Todolist/${newtask.id}`,newtask);
    return (await reponse).data
})
export const DELETETASK=createAsyncThunk("todo/DELETETASK",async(id:number)=>{
    const reponse=axios.delete(`http://localhost:8080/Todolist/${id}`);
    return (await reponse).data
})
