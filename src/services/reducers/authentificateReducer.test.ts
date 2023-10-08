import reducer, {
  setToken,
  setUser,
  requestRecovery,
  logoutSuccess,
} from "../../services/reducers/authentificateReducer";
import { AuthState } from "../../services/types/types";

import { initialState } from "./authentificateReducer";

const FILLED_STATE: AuthState = {
  token: "someToken",
  name: "John",
  email: "john@example.com",
  recovery: true,
};

describe("authentication reducer", () => {
  it("setToken: correct", () => {
    const newState = reducer(initialState, setToken("newToken"));
    expect(newState.token).toEqual("newToken");
  });

  it("setUser: correct", () => {
    const userPayload = { name: "John Doe", email: "john.doe@example.com" };
    const newState = reducer(initialState, setUser(userPayload));
    expect(newState.name).toEqual(userPayload.name);
    expect(newState.email).toEqual(userPayload.email);
  });

  it("requestRecovery: correct", () => {
    const newState = reducer(initialState, requestRecovery());
    expect(newState.recovery).toEqual(true);
  });

  it("logoutSuccess: correct", () => {
    const newState = reducer(FILLED_STATE, logoutSuccess());
    expect(newState).toEqual(initialState);
  });
});
