import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { AppDispatch } from "../store";
import {
  getIngredientsPending,
  getIngredientsSuccess,
  getIngredientsError,
} from "../reducers/ingredientsReducer";

const API_URL = `${BASE_URL}/ingredients`;

export const fetchIngredients = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsPending());

  return fetch(API_URL)
    .then((response) => checkResponse(response))
    .then((data) => dispatch(getIngredientsSuccess(data)))
    .catch((error) => {
      console.log(`${error.message} ${error.response}`);
      dispatch(getIngredientsError(error));
    });
};
