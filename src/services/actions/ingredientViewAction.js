export const viewIngredient = (ingredient) => ({
  type: `VIEW_INGREDIENT`,
  payload: ingredient,
});

export const clearIngredient = () => ({
  type: `CLEAR_INGREDIENT`,
});
