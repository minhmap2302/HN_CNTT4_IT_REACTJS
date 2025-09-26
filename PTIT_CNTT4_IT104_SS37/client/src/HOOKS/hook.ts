import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { AppDispatch, RootState } from "../redux/stores/store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector