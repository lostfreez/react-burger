import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { setToken } from "../reducers/authentificateReducer";
import Cookies from "js-cookie";
import { AppDispatch } from "../store";
import { NavigateFunction } from "../types/types";

const API_URL = `${BASE_URL}/auth/login`;

export const authorisation = (
  email: string,
  password: string,
  navigate: NavigateFunction,
  redirect: string
) => {
  return function (dispatch: AppDispatch) {
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
