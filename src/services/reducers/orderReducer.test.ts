import reducer, {
  clearOrder,
  createOrderPending,
  createOrderFulfilled,
  createOrderRejected,
  initialState,
} from "../../services/reducers/orderReducer";
import { OrderState } from "../../services/types/types";

const TEST_PAYLOAD = {
  number: 1234,
  name: "Test Order",
};

describe("order reducer", () => {
  it("clearOrder : correct", () => {
    const stateBeforeClear: OrderState = {
      ...initialState,
      orderName: TEST_PAYLOAD.name,
      orderNumber: TEST_PAYLOAD.number,
      orderFailed: true,
      isLoading: true,
    };
    const newState = reducer(stateBeforeClear, clearOrder());
    expect(newState).toEqual(initialState);
  });

  it("createOrderPending : correct", () => {
    const newState = reducer(initialState, createOrderPending());
    expect(newState.isLoading).toEqual(true);
    expect(newState.orderFailed).toEqual(false);
  });

  it("createOrderFulfilled : correct", () => {
    const newState = reducer(initialState, createOrderFulfilled(TEST_PAYLOAD));
    expect(newState.isLoading).toEqual(false);
    expect(newState.orderName).toEqual(TEST_PAYLOAD.name);
    expect(newState.orderNumber).toEqual(TEST_PAYLOAD.number);
    expect(newState.orderFailed).toEqual(false);
  });

  it("createOrderRejected : correct", () => {
    const newState = reducer(initialState, createOrderRejected());
    expect(newState.isLoading).toEqual(false);
    expect(newState.orderFailed).toEqual(true);
  });
});
