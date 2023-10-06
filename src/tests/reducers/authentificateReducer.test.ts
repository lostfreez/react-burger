import reducer, {
  setToken,
  setUser,
  requestRecovery,
  logoutSuccess,
} from "../../services/reducers/authentificateReducer";
import { AuthState } from "../../services/types/types";

let initialState: AuthState;

describe("authentication reducer", () => {
  beforeEach(() => {
    initialState = {
      token: null,
      name: "",
      email: "",
      recovery: false,
    };
  });

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
    const filledState: AuthState = {
      token: "someToken",
      name: "John",
      email: "john@example.com",
      recovery: true,
    };
    const newState = reducer(filledState, logoutSuccess());
    expect(newState).toEqual(initialState);
  });
});
