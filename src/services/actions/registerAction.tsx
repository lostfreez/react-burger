import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import Cookies from "js-cookie";
import { setToken } from "../reducers/authentificateReducer";
import { AppDispatch } from "../store";
import { NavigateFunction } from "../types/types";

const API_URL = `${BASE_URL}/auth/register`;


export const register = (
  userName: string,
  password: string,
  email: string,
  navigate: NavigateFunction
) => {
  return function (dispatch: AppDispatch) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: userName,
      }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken } = response;
          Cookies.set("refreshToken", refreshToken);
          dispatch(setToken(accessToken));
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error during registration: ", error);
      });
  };
};
