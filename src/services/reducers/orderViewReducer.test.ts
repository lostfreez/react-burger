import reducer, {
  viewOrder,
  clearOrderView,
  initialState,
} from "../../services/reducers/orderViewReducer";
import { OrderView, Order } from "../../services/types/types";

const TEST_ORDER: Order = {
  ingredients: ["ingredient1", "ingredient2"],
  _id: "test_id_1",
  status: "completed",
  number: 1,
  createdAt: "2021-01-01T00:00:00.000Z",
  updatedAt: "2021-01-01T00:00:00.000Z",
  name: "Test Order 1",
};

const SECOND_STATE: OrderView = {
  ingredients: ["ingredient3", "ingredient4"],
  _id: "test_id_2",
  status: "pending",
  number: 2,
  createdAt: "2021-01-01T00:00:00.000Z",
  updatedAt: "2021-01-01T00:00:00.000Z",
  name: "Test Order 2",
};

describe("orderView reducer", () => {
  it("viewOrder : correct", () => {
    const newState = reducer(initialState, viewOrder(TEST_ORDER));
    expect(newState).toEqual(TEST_ORDER);
  });

  it("clearOrderView : correct", () => {
    const newState = reducer(SECOND_STATE, clearOrderView());
    expect(newState).toEqual(initialState);
  });
});
