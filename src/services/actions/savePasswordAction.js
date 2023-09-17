import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";

const API_URL = `${BASE_URL}/password-reset/reset`;

export const savePassword = (password, token) => {
  return function (dispatch) {
    return fetch(API_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, token: token }),
    })
      .then((respone) => checkResponse(respone))
      .then((respone) => {
        if (respone.success) {
          return { success: true };
        }
      })
      .catch((error) => {
        return { success: false };
      });
  };
};
