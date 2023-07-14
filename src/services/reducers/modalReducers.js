import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SWITCH_LOADER,
} from "../actions/actionsTypes";

const initialState = { isOpen: false, children: null, loader: false };

function modalReducers(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        children: action.payload,
      };
    case CLOSE_MODAL:
      return initialState;
    case SWITCH_LOADER:
      return {
        isOpen: true,
        loader: true,
      };
    default:
      return state;
  }
}

export default modalReducers;
