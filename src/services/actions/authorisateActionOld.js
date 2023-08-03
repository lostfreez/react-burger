import { BASE_URL } from "../urls/urls";
import Cookies from "js-cookie";
import { updateToken } from "./updateTokenAction";
import { authSuccess } from "./actionsTypes";

const API_URL = `${BASE_URL}/auth/user`;

export const authorisate = () => {
  const accessToken = Cookies.get("accessToken");
  return function (dispatch) {
    return fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => dispatch(authSuccess(data)));
      } else {
        dispatch(updateToken());
      }
    });
  };
};
