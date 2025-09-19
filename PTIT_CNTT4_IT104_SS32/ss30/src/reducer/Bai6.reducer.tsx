import type { ActionToogle } from "../types/interface";

export const Toggle=(state:boolean=false,action:ActionToogle):boolean=>{
    switch(action.type){
        case "toogle":
            return !state;
        default:
            return state;
    }
}