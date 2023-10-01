import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import {
  createOrderPending,
  createOrderFulfilled,
  createOrderRejected,
} from "../reducers/orderReducer";
import { AppDispatch } from "../store";
import { RootState } from "../root";

const API_URL = `${BASE_URL}/orders`;

export const createOrder = () => {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    const state = getState();
    const ingredients =  state.ingredientsList.ingredients;
    const bun = state.ingredientsList.bun!._id;
    const orderList = [bun, ...ingredients]
    dispatch(createOrderPending());
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderList }),
    })
      .then((response) => checkResponse(response))
      .then((data) => {
        dispatch(
          createOrderFulfilled({ number: data.order.number, name: data.name })
        );
      })
      .catch((error) => {
        console.log(`${error.message} ${error.response}`);

        dispatch(createOrderRejected());
      });
  };
};
