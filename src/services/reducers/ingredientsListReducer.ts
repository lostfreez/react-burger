import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientsListState } from "../types/types";
import { Ingredient } from "../types/types";

export const initialState: IngredientsListState = {
  ingredients: [],
  bun: null,
};

const ingredientsListSlice = createSlice({
  name: "ingredientsList",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients.push(action.payload);
    },
    addBun: (state, action: PayloadAction<Ingredient>) => {
      state.bun = action.payload;
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (item) => item !== action.payload
      );
    },
    swapIngredient: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
    clearIngredients: () => initialState,
  },
});

export const {
  addIngredient,
  addBun,
  removeIngredient,
  swapIngredient,
  clearIngredients,
} = ingredientsListSlice.actions;

export default ingredientsListSlice.reducer;
