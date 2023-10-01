import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientView } from "../types/types";

const initialState: ingredientView = {
  _id: null,
  name: null,
  type: null,
  proteins: null,
  fat: null,
  carbohydrates: null,
  calories: null,
  price: null,
  image: null,
  image_mobile: null,
  image_large: null,
};

const ingredientViewSlice = createSlice({
  name: "ingredientView",
  initialState,
  reducers: {
    viewIngredient: (state, action: PayloadAction<ingredientView>) => {
      Object.assign(state, action.payload);
    },
    clearIngredient: () => {
      return initialState;
    },
  },
});

export const { viewIngredient, clearIngredient } = ingredientViewSlice.actions;

export default ingredientViewSlice.reducer;
