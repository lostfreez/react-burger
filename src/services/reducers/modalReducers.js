import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionsTypes";

const initialState = { isOpen: false, children: null };

function modalReducers(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        children: action.payload,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducers;
