import reducer, {
  clearOrder,
  createOrderPending,
  createOrderFulfilled,
  createOrderRejected,
} from "../../services/reducers/orderReducer";
import { OrderState } from "../../services/types/types";

describe("order reducer", () => {
  let initialState: OrderState;

  beforeEach(() => {
    initialState = {
      orderName: "",
      orderNumber: 0,
      orderFailed: false,
      isLoading: false,
    };
  });

  it("clearOrder : correct", () => {
    const State: OrderState = {
      orderName: "Test Order",
      orderNumber: 1234,
      orderFailed: true,
      isLoading: true,
    };
    const newState = reducer(State, clearOrder());
    expect(newState).toEqual(initialState);
  });

  it("createOrderPending : correct", () => {
    const newState = reducer(initialState, createOrderPending());
    expect(newState.isLoading).toEqual(true);
    expect(newState.orderFailed).toEqual(false);
  });

  it("createOrderFulfilled : correct", () => {
    const testPayload = {
      number: 1234,
      name: "Test Order",
    };
    const newState = reducer(initialState, createOrderFulfilled(testPayload));
    expect(newState.isLoading).toEqual(false);
    expect(newState.orderName).toEqual(testPayload.name);
    expect(newState.orderNumber).toEqual(testPayload.number);
    expect(newState.orderFailed).toEqual(false);
  });

  it("createOrderRejected : correct", () => {
    const newState = reducer(initialState, createOrderRejected());
    expect(newState.isLoading).toEqual(false);
    expect(newState.orderFailed).toEqual(true);
  });
});
