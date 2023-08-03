import { REGISTER_SUCCESS } from "../actions/registerAction";
import { AUTHENTIFICATE } from "../actions/actionsTypes";
import Cookies from "js-cookie";

const initialState = {
  sign: false,
};

const authentificateReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      Cookies.set("accessToken", action.payload.accessToken);
      Cookies.set("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        sign: true,
      };
    case AUTHENTIFICATE:
      return {
        ...state,
        sign: true,
      };
    default:
      return state;
  }
};

export default authentificateReducer;
