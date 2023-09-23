import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { setToken } from "./actionsTypes";
import Cookies from "js-cookie";

const API_URL = `${BASE_URL}/auth/login`;

export const authorisation = (email, password, navigate, redirect) => {
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
          Cookies.set("refreshToken", refreshToken);
          dispatch(setToken(accessToken));
          navigate(redirect || "/");
        }
      })
      .catch((error) => {
        console.error("Error during authentication: ", error);
      });
  };
};
