import { VIEW_INGREDIENT, CLEAR_INGREDIENT } from "../actions/actionsTypes";

const initialState = {};

function ingredientViewReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_INGREDIENT:
      return action.payload;
    case CLEAR_INGREDIENT:
      return initialState;
    default:
      return state;
  }
}

export default ingredientViewReducer;
