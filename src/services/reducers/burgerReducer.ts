import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseElement, MiddleElement, BurgerState } from "../types/types"

const initialState: BurgerState = {
  hasBaseSelected: false,
  baseElement: null,
  middleElement: [],
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setBaseSelected: (state, action: PayloadAction<boolean>) => {
      state.hasBaseSelected = action.payload;
    },
    setBaseElement: (state, action: PayloadAction<BaseElement>) => {
      state.baseElement = action.payload;
    },
    setMiddleElements: (state, action: PayloadAction<MiddleElement[]>) => {
      state.middleElement = action.payload;
    },
    clearBurger: () => initialState,
  },
});

export const {
  setBaseSelected,
  setBaseElement,
  setMiddleElements,
  clearBurger,
} = burgerSlice.actions;

export default burgerSlice.reducer;
