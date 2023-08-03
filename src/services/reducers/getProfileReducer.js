import { GET_PROFILE_SUCCESS } from "../actions/getProfileAction";

const initialState = {
  name: "",
  email: "",
};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default getProfileReducer;
