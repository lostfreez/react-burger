const initialState = {};

const ingredientsListReducer = (state = initialState, action) => {
  const actionParts = action.type.split("_");
  const actionType = actionParts[0];
  const id = actionParts[1];

  switch (actionType) {
    case "ADD":
      return {
        ...state,
        id,
      };
    case "REMOVE":
      const index = Object.values(state).indexOf(id);
      if (index > -1) {
        const newState = { ...state };
        delete newState[Object.keys(newState)[index]];
        return newState;
      }
      return state;
    default:
      return state;
  }
};

export default ingredientsListReducer;
