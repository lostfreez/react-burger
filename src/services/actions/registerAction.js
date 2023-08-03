import { BASE_URL } from "../urls/urls";

import { checkResponse } from "../checkResponse/checkResponse";

export const REGISTER_SUCCESS = "REGISTER_SUCCES";

const API_URL = `${BASE_URL}/auth/register`;

export const register = (userName, password, email, navigate) => {
  return function (dispatch) {
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
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              accessToken: response.accessToken,
              refreshToken: response.refreshToken,
            },
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
