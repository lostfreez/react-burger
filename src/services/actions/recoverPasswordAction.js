import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";

export const RECOVERY_SUCCES = "RECOVERY_SUCCES";
export const RECOVERY_FAILED = "RECOVERY_FAILED";

const API_URL = `${BASE_URL}/password-reset`;

export const recoverPassword = (email) => {
  return function (dispatch) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        console.log(response);
        if (response.success) {
          dispatch({
            type: RECOVERY_SUCCES,
          });
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      });
  };
};
