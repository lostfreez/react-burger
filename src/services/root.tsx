import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import ingredientsListReducer from "./reducers/ingredientsListReducer";
import modalReducers from "./reducers/modalReducers";
import ingredientViewReducer from "./reducers/ingredientViewReducer";
import orderReducer from "./reducers/orderReducer";
import authentificateReducer from "./reducers/authentificateReducer";
import burgerReducer from "./reducers/burgerReducer";
import feedReducer from "./reducers/feedReducer";
import orderViewReducer from "./reducers/orderViewReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  getIngredients: ingredientsReducer,
  ingredientsList: ingredientsListReducer,
  modal: modalReducers,
  ingredient: ingredientViewReducer,
  order: orderReducer,
  authentificate: authentificateReducer,
  burger: burgerReducer,
  feed: feedReducer,
  orderId: orderViewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
