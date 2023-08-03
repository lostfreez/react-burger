import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";

export const AUTH_SUCCES = "AUTH_SUCCES";
export const AUTH_FAILED = "AUTH_FAILED";

const API_URL = `${BASE_URL}/auth/login`;

export const authorisation = (email, password) => {
  return function (dispatch) {
    return fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        console.log(response);
        if (response.success) {
          dispatch({
            type: AUTH_SUCCES,
          });
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      });
  };
};
