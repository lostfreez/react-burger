import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import Cookies from "js-cookie";
import { authorisate } from "./authorisateActionOld";

export const AUTHORISATE_FAILED = "AUTHORISATION_FAILED";

const API_URL = `${BASE_URL}/auth/token`;
const refreshToken = Cookies.get("refreshToken");

export const updateToken = () => {
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
          dispatch(authorisate());
          Cookies.set("accessToken", response.accessToken);
          Cookies.set("refreshToken", response.refreshToken);
        } else {
          dispatch({ type: AUTHORISATE_FAILED });
        }
      });
  };
};
