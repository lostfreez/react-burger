import { GET_INGREDIENTS_PENDING, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR } from '../actions/ingredientsAction';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

export default function ingredientsReducer(state = initialState, action) {
  switch(action.type) {
    case GET_INGREDIENTS_PENDING:
      return { ...state, isLoading: true, error: null };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, ingredients: action.payload };
    case GET_INGREDIENTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}