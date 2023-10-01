import {
  TypedUseSelectorHook,
  useDispatch as dispatchFromRedux,
  useSelector as selectorFromRedux,
} from "react-redux";
import { RootState } from "../root";
import { AppDispatch } from "../store";

export const useAppDispatch = () => dispatchFromRedux<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  selectorFromRedux;
