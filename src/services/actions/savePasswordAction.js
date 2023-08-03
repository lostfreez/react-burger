import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";

export const SAVE_CONFIRM = "SAVE_CONFIRM";
export const SAVE_FAILED = "SAVE_FAILED";

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
        console.log(respone);
        if (respone.success) {
          dispatch({
            type: SAVE_CONFIRM,
          });
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      });
  };
};
