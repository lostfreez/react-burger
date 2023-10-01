import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountState } from '../types/types';

const initialState: CountState = {
  ingredients: {},
  bun: null,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.ingredients[id] = (state.ingredients[id] || 0) + 1;
    },
    incrementBun: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.bun !== null) {
        const { [state.bun]: _, ...ingredients } = state.ingredients;
        state.ingredients = {
          ...ingredients,
          [id]: 1,
        };
      } else {
        state.ingredients[id] = 1;
      }
      state.bun = id;
    },
    decrementCount: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.ingredients[id] = (state.ingredients[id] || 0) - 1;
    },
    clearCount: () => initialState
  },
});

export const {
  incrementCount,
  incrementBun,
  decrementCount,
  clearCount,
} = countSlice.actions;

export default countSlice.reducer;
