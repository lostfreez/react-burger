import reducer, {
  getIngredientsPending,
  getIngredientsSuccess,
  getIngredientsError,
  initialState,
} from "../../services/reducers/ingredientsReducer";
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

describe("ingredients reducer", () => {
  it("getIngredientsPending: correct", () => {
    const newState = reducer(initialState, getIngredientsPending());
    expect(newState.isLoading).toEqual(true);
    expect(newState.error).toEqual(null);
  });

  it("getIngredientsSuccess : correct", () => {
    const newState = reducer(
      initialState,
      getIngredientsSuccess({ data: [TEST_INGREDIENT], success: true })
    );
    expect(newState.ingredients.data).toEqual([TEST_INGREDIENT]);
    expect(newState.ingredients.success).toEqual(true);
    expect(newState.isLoading).toEqual(false);
  });

  it("getIngredientsError : correct", () => {
    const testError = new Error("Test error");
    const newState = reducer(initialState, getIngredientsError(testError));
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual(testError);
  });
});
