import { BASE_URL } from "../urls/urls";

export const GET_INGREDIENTS_PENDING = "GET_INGREDIENTS_PENDING";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

const API_URL = `${BASE_URL}/ingredients`;

export const fetchIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_PENDING });

  return fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error("Ошибка при получении данных с API");
        error.response = response;
        throw error;
      }
    })
    .then((data) => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data }))
    .catch((error) => {
      console.log(`${error.message} ${error.response}`);
      dispatch({ type: GET_INGREDIENTS_ERROR, payload: error });
    });
};
