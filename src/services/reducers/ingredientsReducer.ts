import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientsState } from "../types/types";
import { Ingredient } from "../types/types";

export const initialState: IngredientsState = {
  ingredients: { data: [], success: false },
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    getIngredientsPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getIngredientsSuccess: (
      state,
      action: PayloadAction<{ data: Ingredient[]; success: boolean }>
    ) => {
      state.ingredients = action.payload;
      state.isLoading = false;
    },
    getIngredientsError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getIngredientsPending,
  getIngredientsSuccess,
  getIngredientsError,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
