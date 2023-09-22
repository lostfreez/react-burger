import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { AppDispatch } from "../store";

const API_URL = `${BASE_URL}/password-reset/reset`;

export const savePassword = (password: string, token: string) => {
  return function () {
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
