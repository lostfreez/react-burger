import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { setUser } from "./actionsTypes";

const API_URL = `${BASE_URL}/auth/user`;

export const getUserData = () => {
  return function (dispatch, getState) {
    const { token } = getState().authentificate;
    return fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          const { name, email } = response.user;
          dispatch(setUser(name, email));
        }
      })
      .catch((error) => {
        console.error("Error during update data: ", error);
      });
  };
};
