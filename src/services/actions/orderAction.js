import { BASE_URL } from "../urls/urls";

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
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: { number: data.order.number, name: data.name}
          });
        } else {
          throw new Error("Ошибка создания заказа");
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  };
};
