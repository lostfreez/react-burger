const initialState = {};

function ingredientViewReducer(state = initialState, action) {
  switch (action.type) {
    case "VIEW_IGREDIENT":
      return action.payload;
    default:
      return state;
  }
}

export default ingredientViewReducer;
