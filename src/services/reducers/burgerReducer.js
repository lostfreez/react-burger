const initialState = {
  hasBaseSelected: false,
  baseElement: null,
  middleElement: [],
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASE_SELECTED":
      return {
        ...state,
        hasBaseSelected: action.payload,
      };
    case "SET_BASE_ELEMENT":
      return {
        ...state,
        baseElement: action.payload,
      };
    case "SET_MIDDLE_ELEMENTS":
      return {
        ...state,
        middleElement: action.payload,
      };
    default:
      return state;
  }
};

export default burgerReducer;
