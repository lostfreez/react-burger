import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { requestRecovery } from "./actionsTypes";

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
        if (response.success) {
          dispatch(requestRecovery());
          return { success: true };
        }
      })
      .catch((error) => {
        console.error("Error during forgot: ", error);
        return { success: false };
      });
  };
};
