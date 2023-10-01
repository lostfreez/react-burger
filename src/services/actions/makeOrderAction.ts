import { clearCount } from "../../services/reducers/countReducer";
import { clearIngredients } from "../../services/reducers/ingredientsListReducer";
import { clearOrder } from "../../services/reducers/orderReducer";
import { clearBurger } from "../../services/reducers/burgerReducer";
import {
  openModal,
  switchLoading,
} from "../../services/reducers/modalReducers";
import { createOrder } from "../../services/actions/orderAction";
import { AppDispatch } from "../store";

export const makeOrder = async (dispatch: AppDispatch) => {
  dispatch(clearOrder());
  dispatch(switchLoading());
  dispatch(openModal("order"));
  await dispatch(createOrder());
  dispatch(switchLoading());
  dispatch(clearCount());
  dispatch(clearIngredients());
  dispatch(clearBurger());
};
