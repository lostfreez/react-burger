import { createSelector } from '@reduxjs/toolkit'


export const selectIngredients = createSelector(
    state => state.getIngredients.ingredients,
    (ingredients) => ingredients?.data || []
  );
export  const selectBuns = createSelector(
  selectIngredients,
  (ingredients) => ingredients.filter((ingredient) => ingredient.type === "bun")
);
export  const selectSauces = createSelector(
  selectIngredients,
  (ingredients) => ingredients.filter((ingredient) => ingredient.type === "sauce")
);
export  const selectMains = createSelector(
  selectIngredients,
  (ingredients) => ingredients.filter((ingredient) => ingredient.type === "main")
);