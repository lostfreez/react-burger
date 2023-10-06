import reducer, {
  addIngredient,
  addBun,
  removeIngredient,
  swapIngredient,
  clearIngredients,
} from "../../services/reducers/ingredientsListReducer"; // убедитесь, что путь верен
import { IngredientsListState, Ingredient } from "../../services/types/types";

let initialState: IngredientsListState;
const testIngredient: Ingredient = {
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
  beforeEach(() => {
    initialState = {
      ingredients: [],
      bun: null,
    };
  });

  it("addIngredient: correct", () => {
    const newState = reducer(initialState, addIngredient(testIngredient._id));
    expect(newState.ingredients).toContain(testIngredient._id);
  });

  it("addBun: correct", () => {
    const newState = reducer(initialState, addBun(testIngredient));
    expect(newState.bun).toEqual(testIngredient);
  });

  it("removeIngredient: correct", () => {
    const startingState: IngredientsListState = {
      ingredients: [testIngredient._id],
      bun: null,
    };
    const newState = reducer(
      startingState,
      removeIngredient(testIngredient._id)
    );
    expect(newState.ingredients).not.toContain(testIngredient._id);
  });

  it("swapIngredient: correct", () => {
    const newIngredients = ["ingredient3_id", "ingredient4_id"];
    const newState = reducer(initialState, swapIngredient(newIngredients));
    expect(newState.ingredients).toEqual(newIngredients);
  });

  it("clearIngredients: should reset the ingredients list", () => {
    const startingState: IngredientsListState = {
      ingredients: [testIngredient._id],
      bun: testIngredient,
    };
    const newState = reducer(startingState, clearIngredients());
    expect(newState).toEqual(initialState);
  });
});
