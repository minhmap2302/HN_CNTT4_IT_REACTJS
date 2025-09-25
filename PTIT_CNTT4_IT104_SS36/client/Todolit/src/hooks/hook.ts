import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { AppDispatch } from "../Redux/stores"
import type { RootState } from "../Redux/stores/index"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
