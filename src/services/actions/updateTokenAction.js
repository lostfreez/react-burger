import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import Cookies from "js-cookie";
import { setToken } from "./actionsTypes";

const API_URL = `${BASE_URL}/auth/token`;

export const updateToken = () => {
  const refreshToken = Cookies.get("refreshToken");
  return function (dispatch) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken } = response;
          Cookies.set("refreshToken", refreshToken);
          dispatch(setToken(accessToken));
          return { success: true };
        }
      })
      .catch((error) => {
        return { success: false };
      });
  };
};
