import reducer, {
  setOrders,
  wsError,
  initWebSocket,
  closeWebSocket,
  clearFeed,
} from "../../services/reducers/feedReducer";
import { Order } from "../../services/types/types";

import { initialState } from "./feedReducer";

const TEST_ORDER_1: Order = {
  ingredients: ["ingredient1", "ingredient2"],
  _id: "test_id_1",
  status: "completed",
  number: 1,
  createdAt: "2021-01-01T00:00:00.000Z",
  updatedAt: "2021-01-01T00:00:00.000Z",
  name: "Test Order 1",
};

const TEST_ORDER_2: Order = {
  ingredients: ["ingredient3", "ingredient4"],
  _id: "test_id_2",
  status: "pending",
  number: 2,
  createdAt: "2021-01-01T00:00:00.000Z",
  updatedAt: "2021-01-01T00:00:00.000Z",
  name: "Test Order 2",
};

describe("feed reducer", () => {
  it("initWebSocket: sets the WebSocket initialization flag to true", () => {
    const newState = reducer(initialState, initWebSocket({ url: "url" }));
    expect(newState.isWebSocketInitialized).toEqual(true);
  });

  it("closeWebSocket: sets the WebSocket initialization flag to false", () => {
    const newState = reducer(initialState, closeWebSocket());
    expect(newState.isWebSocketInitialized).toEqual(false);
  });

  it("setOrders: correctly sets orders, total, and totalToday values", () => {
    const newState = reducer(
      initialState,
      setOrders({
        ...initialState,
        orders: [TEST_ORDER_1, TEST_ORDER_2],
        total: 200,
        totalToday: 100,
      })
    );
    expect(newState.orders.length).toEqual(2);
    expect(newState.orders[0]).toEqual(TEST_ORDER_1);
    expect(newState.orders[1]).toEqual(TEST_ORDER_2);
    expect(newState.total).toEqual(200);
    expect(newState.totalToday).toEqual(100);
    expect(newState.connection).toEqual(true);
  });

  it("wsError: sets the error message", () => {
    const errorMessage = "Something went wrong!";
    const newState = reducer(initialState, wsError(errorMessage));
    expect(newState.error).toEqual(errorMessage);
  });

  it("clearFeed: resets the state to its initial value", () => {
    const newState = reducer(initialState, clearFeed());
    expect(newState).toEqual(initialState);
  });
});
