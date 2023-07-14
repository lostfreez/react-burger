export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const ADD_BUN = "ADD_BUN";
export const SWAP_INGREDIENTS = "SWAP_INGREDIENTS";
export const VIEW_INGREDIENT = "VIEW_INGREDIENT";
export const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CLEAR_COUNT = "CLEAR_COUNT";
export const CLEAR_LIST = "CLEAR_LIST";

export const clearOder = () => ({
  type: CLEAR_ORDER,
});

export const incrementCount = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const decrementCount = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
export const clearCount = () => {
  return {
    type: CLEAR_COUNT,
  };
};

export const addIngredient = (id) => ({
  type: ADD,
  payload: id,
});
export const removeIngredient = (id) => ({
  type: REMOVE,
  payload: id,
});
export const addBun = (id) => ({
  type: ADD_BUN,
  payload: id,
});
export const clearIngredients = () => ({
  type: CLEAR_LIST,
});
export const swapIngredient = (ingredients) => ({
  type: SWAP_INGREDIENTS,
  payload: ingredients,
});
export const viewIngredient = (ingredient) => ({
  type: VIEW_INGREDIENT,
  payload: ingredient,
});

export const clearIngredient = () => ({
  type: CLEAR_INGREDIENT,
});
export function openModal(children) {
  return {
    type: OPEN_MODAL,
    payload: children,
  };
}
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
