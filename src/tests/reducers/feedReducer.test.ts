import reducer, {
  setOrders,
  wsError,
  initWebSocket,
  closeWebSocket,
  clearFeed,
} from "../../services/reducers/feedReducer";
import { FeedState } from "../../services/types/types";
import { Order } from "../../services/types/types";

describe("feed reducer", () => {
  let initialState: FeedState;
  beforeEach(() => {
    initialState = {
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
      isWebSocketInitialized: false,
      connection: false,
    };
  });

  it("initWebSocket: correct", () => {
    const newState = reducer(initialState, initWebSocket({ url: "url" }));
    expect(newState.isWebSocketInitialized).toEqual(true);
  });
  it("closeWebSocket: correct", () => {
    const newState = reducer(initialState, closeWebSocket());
    expect(newState.isWebSocketInitialized).toEqual(false);
  });
  it("setOrders: correct", () => {
    const testOrder1: Order = {
      ingredients: ["ingredient1", "ingredient2"],
      _id: "test_id_1",
      status: "completed",
      number: 1,
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-01T00:00:00.000Z",
      name: "Test Order 1",
    };

    const testOrder2: Order = {
      ingredients: ["ingredient3", "ingredient4"],
      _id: "test_id_2",
      status: "pending",
      number: 2,
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-01T00:00:00.000Z",
      name: "Test Order 2",
    };
    const filledState = {
      orders: [testOrder1, testOrder2],
      total: 200,
      totalToday: 100,
      error: null,
      isWebSocketInitialized: true,
      connection: false,
    };
    const newState = reducer(initialState, setOrders(filledState));
    expect(newState.orders.length).toEqual(2);
    expect(newState.orders[0]).toEqual(testOrder1);
    expect(newState.orders[1]).toEqual(testOrder2);
    expect(newState.total).toEqual(200);
    expect(newState.totalToday).toEqual(100);
    expect(newState.connection).toEqual(true);
  });
  it("wsError: correct", () => {
    const errorMessage = "Something went wrong!";
    const newState = reducer(initialState, wsError(errorMessage));
    expect(newState.error).toEqual(errorMessage);
  });
  it("clearFeed: correct", () => {
    const newState = reducer(initialState, clearFeed());
    expect(newState).toEqual(initialState);
  });
});
