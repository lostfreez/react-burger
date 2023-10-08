import reducer, {
  viewIngredient,
  clearIngredient,
  initialState,
} from "../../services/reducers/ingredientViewReducer";
import { ingredientView } from "../../services/types/types";

const TEST_INGREDIENT: ingredientView = {
  _id: "test_id",
  name: "Test Ingredient",
  type: "main",
  proteins: 5,
  fat: 10,
  carbohydrates: 25,
  calories: 250,
  price: 100,
  image: "test_image_url",
  image_mobile: "test_mobile_image_url",
  image_large: "test_large_image_url",
};

describe("ingredientView reducer", () => {
  it("viewIngredient : correct", () => {
    const newState = reducer(initialState, viewIngredient(TEST_INGREDIENT));
    expect(newState).toEqual(TEST_INGREDIENT);
  });

  it("clearIngredient : correct", () => {
    const newState = reducer(TEST_INGREDIENT, clearIngredient());
    expect(newState).toEqual(initialState);
  });
});
