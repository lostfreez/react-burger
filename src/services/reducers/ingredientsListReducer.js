const initialState = {
  ingredients: [],
  bun: null,
};

const ingredientsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case "ADD_BUN": {
      const updatedIngredients = state.bun
        ? state.ingredients.filter((item) => item !== state.bun)
        : state.ingredients;
      return {
        ...state,
        bun: action.payload,
        ingredients: [...updatedIngredients, action.payload],
      };
    }
    case "REMOVE": {
      return { ...state, ingredients: state.ingredients.filter((item) => item !== action.payload) };
    }
    default:
      return state;
  }
};

export default ingredientsListReducer;
