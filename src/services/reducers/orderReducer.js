const initialState = {
  orderName: "",
  orderNumber: null,
  orderFailed: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        orderNumber: action.payload.number,
        orderName: action.payload.name,
        orderFailed: false,
      };

    case "CREATE_ORDER_FAILED":
      return { ...state, orderFailed: true };
    case "CLEAR_ORDER":
      return initialState;
    default:
      return state;
  }
};

export default orderReducer;
