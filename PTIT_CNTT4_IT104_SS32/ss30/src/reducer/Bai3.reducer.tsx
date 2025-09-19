import type { Actionnumber } from "../types/interface";

export const Couter = (state: number = 0, action: Actionnumber):number => {
  switch (action.type) {
    case "incree":
      return state + 1;
    case "decree":
      return state - 1;
    default:
        return state;
  }
};
