import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedState } from "../types/types";

const initialState: FeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
};

const feedReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    initWebSocket: () => {},
    closeWebSocket: () => {},
    setOrders: (state, action: PayloadAction<FeedState>) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
    wsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setOrders, wsError, initWebSocket, closeWebSocket } =
  feedReducer.actions;

export default feedReducer.reducer;
