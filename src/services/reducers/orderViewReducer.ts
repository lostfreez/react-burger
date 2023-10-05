import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderView } from "../types/types";
import { Order } from "../types/types";

const initialState: OrderView = {
    ingredients: [],
    _id: null,
    status: null,
    number: null,
    createdAt: null,
    updatedAt: null,
    name: null,
};

const orderViewSlice = createSlice({
  name: "ingredientView",
  initialState,
  reducers: {
    viewOrder: (state, action: PayloadAction<Order>) => {
      Object.assign(state, action.payload);
    },
    clearOrderView: () => {
      return initialState;
    },
  },
});

export const { viewOrder, clearOrderView } = orderViewSlice.actions;

export default orderViewSlice.reducer;
