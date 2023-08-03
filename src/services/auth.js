import { authorisate } from "./actions/authorisateActionOld";

export function checkAuth() {
  return function (dispatch) {
    dispatch(authorisate());
  };
}
