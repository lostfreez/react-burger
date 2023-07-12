import { INCREMENT, DECREMENT } from "../actions/actionsTypes";

const initialState = {};

const countReducer = (state = initialState, action) => {
  const id = action.payload;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [id]: (state[id] || 0) - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
