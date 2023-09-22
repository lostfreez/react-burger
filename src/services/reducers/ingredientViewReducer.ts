import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredient } from '../types/types'

const initialState: Ingredient | {} = {};

const ingredientViewSlice = createSlice({
  name: 'ingredientView',
  initialState,
  reducers: {
    viewIngredient: (state, action: PayloadAction<Ingredient>) => {
      return action.payload;
    },
    clearIngredient: () => initialState,
  },
});

export const { viewIngredient, clearIngredient } = ingredientViewSlice.actions;

export default ingredientViewSlice.reducer;
