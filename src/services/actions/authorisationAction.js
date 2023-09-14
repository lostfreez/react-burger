import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { signSuccess } from "./actionsTypes";
import { setToken } from "./actionsTypes";
import { setUser } from "./actionsTypes";
import Cookies from "js-cookie";

const API_URL = `${BASE_URL}/auth/login`;

export const authorisation = (email, password, navigate) => {
  return function (dispatch) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken } = response;
          const { name, email } = response.user;
          Cookies.set("refreshToken", refreshToken);
          dispatch(signSuccess());
          dispatch(setToken(accessToken));
          dispatch(setUser(name, email));
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error during authentication: ", error);
      });
  };
};
