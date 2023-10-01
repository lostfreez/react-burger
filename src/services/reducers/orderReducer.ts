import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "../types/types";

type OrderFulfilledPayload = {
  number: number;
  name: string;
};

const initialState: OrderState = {
  orderName: "",
  orderNumber: 0,
  orderFailed: false,
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder: () => initialState,
    createOrderPending: (state) => {
      state.isLoading = true;
      state.orderFailed = false;
    },
    createOrderFulfilled: (
      state,
      action: PayloadAction<OrderFulfilledPayload>
    ) => {
      state.isLoading = false;
      state.orderNumber = action.payload.number;
      state.orderName = action.payload.name;
    },
    createOrderRejected: (state) => {
      state.isLoading = false;
      state.orderFailed = true;
    },
  },
});

export const {
  clearOrder,
  createOrderPending,
  createOrderFulfilled,
  createOrderRejected,
} = orderSlice.actions;

export default orderSlice.reducer;
