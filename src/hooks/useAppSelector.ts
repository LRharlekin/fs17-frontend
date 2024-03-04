import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppState } from "../app/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
