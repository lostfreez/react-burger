const initialState = {};

export const countReducer = (state = initialState, action) => {
  const actionParts = action.type.split('_');
  const actionType = actionParts[0];
  const id = actionParts[1];

  switch (actionType) {
    case 'INCREMENT':
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        [id]: (state[id] || 0) - 1
      };
    default:
      return state;
  }
};