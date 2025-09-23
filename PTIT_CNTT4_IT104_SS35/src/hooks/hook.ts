import { useDispatch, useSelector, type TypedUseSelectorHook, } from "react-redux";
import type { RootDispatch } from "../store";
import type { RootState } from "../store/index";

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export const useAppDispatch:()=>RootDispatch=useDispatch