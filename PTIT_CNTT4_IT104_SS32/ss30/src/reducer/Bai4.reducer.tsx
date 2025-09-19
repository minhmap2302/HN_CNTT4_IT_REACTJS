import type { ActionRandom } from "../types/interface";

export const Random=(state:number[]=[],action:ActionRandom):number[]=>{
     switch(action.type){
        case "ADDNUMBER":
            return [...state,Math.ceil(Math.random()*100)]
        default:
            return state
    }
}