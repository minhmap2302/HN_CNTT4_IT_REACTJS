import type { ActionChange } from "../types/interface";

type Status = "RikkeiEdu" | "RikkeiSoft";

export const Change = (
  state: Status = "RikkeiEdu",
  action: ActionChange
): Status => {
  switch (action.type) {
    case "Change":
      return state === "RikkeiEdu" ? "RikkeiSoft" : "RikkeiEdu";
    default:
      return state; 
  }
};
