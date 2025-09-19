import type { Action, Todolist } from "../types/type";

export const reducer = (state: Todolist[] = [], action: Action): Todolist[] => {
  switch (action.type) {
    case "ADDTASK":
      return [...state, action.payload];

    case "DELETETASK":
      return state.filter((e) => e.id !== action.payload.id);

    case "TOGGLETASK":
      return state.map((e) =>
        e.id === action.payload.id ? { ...e, checked: !e.checked } : e
      );

    case "UPDATETASK":
      return state.map((e) =>
        e.id === action.payload.id
          ? { ...e, name: action.payload.name, status: action.payload.status }
          : e
      );
    case "FILTERTASK":
      return state.filter((e) => e.status == action.payload.status);
    case "DELETEALL":
      return [];
    case "TOGGLEALLTASK":
      return state.map((e) =>
      e.checked===false?{...e,checked:true}:e
      );
    default:
      return state;
  }
};
