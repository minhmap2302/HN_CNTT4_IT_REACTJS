import { configureStore } from "@reduxjs/toolkit";
export type Person = {
  id: number | null;
  name: string;
  gender: string;
  date: string;
  address: string;
};
type Action = { type: "ADD"; payload: Person };
const initial: Person = {
  id: null,
  name: "",
  gender: "",
  date: "",
  address: "",
};
const addperson = (state: Person = initial, action: Action): Person => {
  switch (action.type) {
    case "ADD":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const store = configureStore({ reducer: addperson });