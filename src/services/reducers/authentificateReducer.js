const initialState = {
  token: null,
  name: null,
  email: null,
  recovery: false,
};

const authentificateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case "REQUEST_RECOVERY":
      return {
        ...state,
        recovery: true,
      };
    case "LOGOUT_SUCCESS":
      return initialState;
    default:
      return state;
  }
};

export default authentificateReducer;
