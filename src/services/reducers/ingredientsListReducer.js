import { REMOVE, SWAP_INGREDIENTS, ADD_BUN, ADD } from "../actions/actionsTypes";

const initialState = {
  ingredients: [],
  bun: null,
};

const ingredientsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case ADD_BUN: {
      const updatedIngredients = state.bun
        ? state.ingredients.filter((item) => item !== state.bun)
        : state.ingredients;
      return {
        ...state,
        bun: action.payload,
        ingredients: [...updatedIngredients, action.payload],
      };
    }
    case REMOVE: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item !== action.payload
        ),
      };
    }
    case SWAP_INGREDIENTS: {
      const bun = state.ingredients[0];
      const newList = action.payload;
      const reorderedIngredients = newList.map((item) => {
        return item.ingredient._id;
      });
      return {
        ...state,
        ingredients: [bun, ...reorderedIngredients],
      };
    }
    default:
      return state;
  }
};

export default ingredientsListReducer;
