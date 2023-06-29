export const GET_INGREDIENTS_PENDING = "GET_INGREDIENTS_PENDING";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const fetchIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_PENDING });
  
  return fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при получении данных с API');
      }
    })
    .then((data) => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: GET_INGREDIENTS_ERROR, payload: error }));
};