import reducer, {
  openModal,
  closeModal,
  switchLoading,
  initialState 
} from "../../services/reducers/modalReducers";
import { ModalState } from "../../services/types/types";

const TEST_MODAL_TYPE = "testModal";

describe("modal reducer", () => {
  it("openModal : correct", () => {
    const newState = reducer(initialState, openModal(TEST_MODAL_TYPE));
    expect(newState.isOpen).toEqual(true);
    expect(newState.modalType).toEqual(TEST_MODAL_TYPE);
    expect(newState.isLoading).toEqual(false);
  });

  it("closeModal : correct", () => {
    const openState: ModalState = {
      ...initialState,
      isOpen: true,
      modalType: TEST_MODAL_TYPE,
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
