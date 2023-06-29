import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import ingredientsListReducer from "./reducers/ingredientsListReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  getIngredients: ingredientsReducer,
  ingredientsList: ingredientsListReducer,
});

export default rootReducer;
