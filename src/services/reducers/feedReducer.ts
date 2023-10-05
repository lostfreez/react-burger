import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedState } from "../types/types";

const initialState: FeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
  isWebSocketInitialized: false,
  connection: false,
};

const feedReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    initWebSocket: (state, action: PayloadAction<{ url: string }>) => {
      state.isWebSocketInitialized = true;
    },
    closeWebSocket: (state) => {
      state.isWebSocketInitialized = false;
    },
    disconnectWebSocket: () => {},
    setOrders: (state, action: PayloadAction<FeedState>) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
      state.connection = true;
    },
    wsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearFeed: (state) => {
      return initialState;
    },
  },
});

export const {
  setOrders,
  wsError,
  initWebSocket,
  closeWebSocket,
  clearFeed,
  disconnectWebSocket,
} = feedReducer.actions;

export default feedReducer.reducer;
