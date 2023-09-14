const initialState = {
  sign: false,
  token: null,
  name: null,
  email: null,
};

const authentificateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_SUCCESS":
      return {
        ...state,
        sign: true,
      };
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
    case "LOGOUT_SUCCESS":
      return initialState;
    default:
      return state;
  }
};

export default authentificateReducer;
