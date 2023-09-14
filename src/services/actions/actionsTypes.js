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
export const INCREMENT_BUN = "INCREMENT_BUN";
export const SWITCH_LOADING = "SWITCH_LOADING";
export const AUTHORISATE_SUCCESS = "AUTHORISATION_SUCCESS";
export const AUTHENTIFICATE = "AUTHENTIFICATE";
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SET_BASE_SELECTED = "SET_BASE_SELECTED";
export const SET_BASE_ELEMENT = "SET_BASE_ELEMENT";
export const SET_MIDDLE_ELEMENTS = "SET_MIDDLE_ELEMENTS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const clearOder = () => ({
  type: CLEAR_ORDER,
});

export const incrementCount = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const incrementBun = (id) => {
  return {
    type: INCREMENT_BUN,
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
export function switchLoading() {
  return {
    type: SWITCH_LOADING,
  };
}

export const setBaseSelected = (value) => ({
  type: SET_BASE_SELECTED,
  payload: value,
});

export const setBaseElement = (element) => ({
  type: SET_BASE_ELEMENT,
  payload: element,
});

export const setMiddleElements = (elements) => ({
  type: SET_MIDDLE_ELEMENTS,
  payload: elements,
});

export const setToken = (accessToken) => ({
  type: SET_TOKEN,
  payload: accessToken,
});
export function signSuccess() {
  return {
    type: SIGN_SUCCESS,
  };
}
export function setUser(name, email) {
  return {
    type: SET_USER,
    payload: {
      name,
      email,
    },
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
