import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
