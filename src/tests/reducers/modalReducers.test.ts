import reducer, {
  openModal,
  closeModal,
  switchLoading,
} from "../../services/reducers/modalReducers";
import { ModalState } from "../../services/types/types";

describe("modal reducer", () => {
  let initialState: ModalState;

  beforeEach(() => {
    initialState = {
      isOpen: false,
      modalType: null,
      isLoading: false,
    };
  });

  it("openModal : correct", () => {
    const testModalType = "testModal";
    const newState = reducer(initialState, openModal(testModalType));
    expect(newState.isOpen).toEqual(true);
    expect(newState.modalType).toEqual(testModalType);
    expect(newState.isLoading).toEqual(false);
  });

  it("closeModal : correct", () => {
    const openState: ModalState = {
      isOpen: true,
      modalType: "testModal",
      isLoading: false,
    };
    const newState = reducer(openState, closeModal());
    expect(newState).toEqual(initialState);
  });

  it("switchLoading : correct", () => {
    let newState = reducer(initialState, switchLoading());
    expect(newState.isLoading).toEqual(true);

    newState = reducer(newState, switchLoading());
    expect(newState.isLoading).toEqual(false);
  });
});
