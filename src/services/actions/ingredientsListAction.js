export const addIngredient = (id) => ({
  type: `ADD`,
  payload: id,
});
export const removeIngredient = (id) => ({
  type: `REMOVE`,
  payload: id,
});
export const addBun = (id) => ({
  type: `ADD_BUN`,
  payload: id,
});
export const swapIngredient = (ingredients) => ({
  type: `SWAP_INGREDIENTS`,
  payload: ingredients,
});
