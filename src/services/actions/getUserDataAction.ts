import { BASE_URL } from "../urls/urls";
import { checkResponse } from "../checkResponse/checkResponse";
import { setUser } from "../reducers/authentificateReducer";
import { AppDispatch } from "../store";
import { RootState } from "../root";

const API_URL = `${BASE_URL}/auth/user`;

export const getUserData = () => {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    const state = getState();
    return fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.authentificate.token || "",
      },
    })
      .then((response) => checkResponse(response))
      .then((response) => {
        if (response.success) {
          const { name, email } = response.user;
          dispatch(setUser({ name, email }));
        }
      })
      .catch((error) => {
        console.error("Error during update data: ", error);
      });
  };
};
