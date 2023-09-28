import { createSelector } from "@reduxjs/toolkit";
import { Ingredient } from "../types/types";
import { RootState } from "../root";

export const selectIngredients = createSelector(
  (state: RootState) => state.getIngredients.ingredients?.data,
  (ingredients: Ingredient[]) => ingredients || []
);
export const selectBuns = createSelector(selectIngredients, (ingredients) =>
  ingredients.filter((ingredient: Ingredient) => ingredient.type === "bun")
);
export const selectSauces = createSelector(selectIngredients, (ingredients) =>
  ingredients.filter((ingredient: Ingredient) => ingredient.type === "sauce")
);
export const selectMains = createSelector(selectIngredients, (ingredients) =>
  ingredients.filter((ingredient: Ingredient) => ingredient.type === "main")
);
