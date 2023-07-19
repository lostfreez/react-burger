import {
  INCREMENT,
  INCREMENT_BUN,
  DECREMENT,
  CLEAR_COUNT,
} from "../actions/actionsTypes";

const initialState = {
  ingredients: {},
  bun: null,
};

const countReducer = (state = initialState, action) => {
  const id = action.payload;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [id]: (state.ingredients[id] || 0) + 1,
        },
      };
    case INCREMENT_BUN:
      if (state.bun !== null) {
        const { [state.bun]: _, ...ingredients } = state.ingredients;
        return {
          ...state,
          bun: id,
          ingredients: {
            ...ingredients,
            [id]: 1,
          },
        };
      }
      return {
        ...state,
        bun: id,
        ingredients: {
          ...state.ingredients,
          [id]: 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [id]: (state.ingredients[id] || 0) - 1,
        },
      };
    case CLEAR_COUNT:
      return initialState;

    default:
      return state;
  }
};

export default countReducer;
