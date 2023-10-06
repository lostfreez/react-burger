import reducer, {
    viewOrder,
    clearOrderView,
  } from "../../services/reducers/orderViewReducer";
  import { OrderView } from "../../services/types/types";
  import { Order } from "../../services/types/types";
  
  describe("orderView reducer", () => {
    let initialState: OrderView;
  
    beforeEach(() => {
      initialState = {
        ingredients: [],
        _id: null,
        status: null,
        number: null,
        createdAt: null,
        updatedAt: null,
        name: null,
      };
    });
  
    it("viewOrder : correct", () => {
      const testOrder: Order = {
        ingredients: ["ingredient1", "ingredient2"],
        _id: "test_id_1",
        status: "completed",
        number: 1,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
        name: "Test Order 1",
      };
  
      const newState = reducer(initialState, viewOrder(testOrder));
      expect(newState).toEqual(testOrder);
    });
  
    it("clearOrderView : correct", () => {
      const State: OrderView = {
        ingredients: ["ingredient3", "ingredient4"],
        _id: "test_id_2",
        status: "pending",
        number: 2,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
        name: "Test Order 2",
      };
  
      const newState = reducer(State, clearOrderView());
      expect(newState).toEqual(initialState);
    });
  });
  