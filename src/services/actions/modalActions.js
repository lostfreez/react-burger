export default function openModal(modalType) {
  return {
    type: "OPEN_MODAL",
    payload: modalType
  };
}
