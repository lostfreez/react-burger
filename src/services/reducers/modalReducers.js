import { OPEN_MODAL, CLOSE_MODAL,  SWITCH_LOADING } from "../actions/actionsTypes";

const initialState = { isOpen: false, children: null, isLoading: false };

function modalReducers(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        children: action.payload,
      };
      case SWITCH_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducers;
