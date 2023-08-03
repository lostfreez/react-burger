import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import Cookies from "js-cookie";
import { updateToken } from "./updateTokenAction";

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED";

const API_URL = `${BASE_URL}/auth/user`;
const accessToken = Cookies.get("accessToken");

export const getProfile = () => {
  return function (dispatch) {
    return fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(updateToken());
        }
        return response;
      })
      .then((response) => {
        console.log(response);
        checkResponse(response);
      })
      .then((response) => {
        console.log(response);
        if (response.success) {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: {
              name: response.user.name,
              email: response.user.email,
            },
          });
        }
      });
  };
};
