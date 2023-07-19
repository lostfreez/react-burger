import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import ingredientsListReducer from "./reducers/ingredientsListReducer";
import modalReducers from "./reducers/modalReducers";
import ingredientViewReducer from "./reducers/ingredientViewReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  getIngredients: ingredientsReducer,
  ingredientsList: ingredientsListReducer,
  modal: modalReducers,
  ingredient: ingredientViewReducer,
  order: orderReducer,
});

export default rootReducer;
