import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";

export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";

const API_URL = `${BASE_URL}/orders`;

export const createOrder = () => {
  return function (dispatch, getState) {
    const state = getState();
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: state.ingredientsList.ingredients }),
    })
      .then((response) => checkResponse(response))
      .then((data) =>
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          payload: { number: data.order.number, name: data.name },
        })
      )
      .catch((error) => {
        console.log(`${error.message} ${error.response}`);
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  };
};
