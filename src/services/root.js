import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  getIngredients: ingredientsReducer,
});

export default rootReducer;
