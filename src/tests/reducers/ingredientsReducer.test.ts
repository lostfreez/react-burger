import reducer, {
    getIngredientsPending,
    getIngredientsSuccess,
    getIngredientsError,
  } from "../../services/reducers/ingredientsReducer"
  import { IngredientsState, Ingredient } from "../../services/types/types";
  
  describe("ingredients reducer", () => {
    let initialState: IngredientsState;
  
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
  
    beforeEach(() => {
      initialState = {
        ingredients: { data: [], success: false },
        isLoading: false,
        error: null,
      };
    });
  
    it("getIngredientsPending: correct", () => {
      const newState = reducer(initialState, getIngredientsPending());
      expect(newState.isLoading).toEqual(true);
      expect(newState.error).toEqual(null);
    });
  
    it("getIngredientsSuccess : correct", () => {
      const newState = reducer(
        initialState,
        getIngredientsSuccess({ data: [testIngredient], success: true })
      );
      expect(newState.ingredients.data).toEqual([testIngredient]);
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
  