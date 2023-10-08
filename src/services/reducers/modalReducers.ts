import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../types/types";

export const initialState: ModalState = {
  isOpen: false,
  modalType: null,
  isLoading: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal: () => {
      return initialState;
    },
    switchLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { openModal, closeModal, switchLoading } = modalSlice.actions;

export default modalSlice.reducer;
