export function openModal(modalType) {
  return {
    type: "OPEN_MODAL",
    payload: modalType,
  };
}
export function closeModal() {
  return {
    type: "CLOSE_MODAL",
  };
}
