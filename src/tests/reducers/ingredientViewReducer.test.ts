import reducer, {
  viewIngredient,
  clearIngredient,
} from "../../services/reducers/ingredientViewReducer";
import { ingredientView } from "../../services/types/types";

describe("ingredientView reducer", () => {
  let initialState: ingredientView;
  const testIngredient: ingredientView = {
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
  beforeEach(() => {
    initialState = {
      _id: null,
      name: null,
      type: null,
      proteins: null,
      fat: null,
      carbohydrates: null,
      calories: null,
      price: null,
      image: null,
      image_mobile: null,
      image_large: null,
    };
  });

  it("viewIngredient : correct", () => {
    const newState = reducer(initialState, viewIngredient(testIngredient));
    expect(newState).toEqual(testIngredient);
  });

  it("clearIngredient : correct", () => {
    const populatedState = { ...testIngredient };
    const newState = reducer(populatedState, clearIngredient());
    expect(newState).toEqual(initialState);
  });
});
