import reducer, {
  addIngredient,
  addBun,
  removeIngredient,
  swapIngredient,
  clearIngredients,
  initialState,
} from "../../services/reducers/ingredientsListReducer";
import { Ingredient } from "../../services/types/types";

const TEST_INGREDIENT: Ingredient = {
  name: "Test Ingredient",
  price: 100,
  image: "test_image_url",
  _id: "test_id",
  type: "main",
  calories: 250,
  image_large: "test_large_image_url",
  proteins: 5,
  carbohydrates: 25,
  fat: 10,
  image_mobile: "test_mobile_image_url",
};

describe("ingredientsList reducer", () => {
  it("addIngredient: correct", () => {
    const newState = reducer(initialState, addIngredient(TEST_INGREDIENT._id));
    expect(newState.ingredients).toContain(TEST_INGREDIENT._id);
  });

  it("addBun: correct", () => {
    const newState = reducer(initialState, addBun(TEST_INGREDIENT));
    expect(newState.bun).toEqual(TEST_INGREDIENT);
  });

  it("removeIngredient: correct", () => {
    const startingState = {
      ...initialState,
      ingredients: [TEST_INGREDIENT._id],
    };
    const newState = reducer(
      startingState,
      removeIngredient(TEST_INGREDIENT._id)
    );
    expect(newState.ingredients).not.toContain(TEST_INGREDIENT._id);
  });

  it("swapIngredient: correct", () => {
    const newIngredients = ["ingredient3_id", "ingredient4_id"];
    const newState = reducer(initialState, swapIngredient(newIngredients));
    expect(newState.ingredients).toEqual(newIngredients);
  });

  it("clearIngredients: should reset the ingredients list", () => {
    const startingState = {
      ...initialState,
      ingredients: [TEST_INGREDIENT._id],
      bun: TEST_INGREDIENT,
    };
    const newState = reducer(startingState, clearIngredients());
    expect(newState).toEqual(initialState);
  });
});
