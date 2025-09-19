import type { Action, Person } from "../types/interface";

export const Profile=(state:Person[]=[] ,action:Action):Person[]=>{
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
        default:
            return state
    }
}