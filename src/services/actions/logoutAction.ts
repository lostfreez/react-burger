import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import Cookies from "js-cookie";
import { logoutSuccess } from "../reducers/authentificateReducer";
import { AppDispatch } from "../store";
import { NavigateFunction } from "../types/types";

const API_URL = `${BASE_URL}/auth/logout`;

export const logoutUser = (navigate: NavigateFunction) => {
  return function (dispatch: AppDispatch) {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      dispatch(logoutSuccess());
      navigate("/login");
      return;
    }

    return fetch(API_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          Cookies.remove("refreshToken");
          dispatch(logoutSuccess());
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };
};
