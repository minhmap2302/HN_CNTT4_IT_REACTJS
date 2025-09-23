import { createSlice } from "@reduxjs/toolkit"

type person={
    id:number|null
    name:string,
    email:string,
    password:string
}


const initialState:person={id:null,name:"",email:"",password:""}
const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        Login:(state,actions)=>{
            state.id=actions.payload.id;
            state.name=actions.payload.name;
            state.email=actions.payload.email;
            state.password=actions.payload.password
        }
    }
})
export const {Login}=loginSlice.actions;
export default loginSlice.reducer