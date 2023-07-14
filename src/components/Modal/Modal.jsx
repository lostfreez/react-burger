import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { modalComponent } from "../../services/modalComponent/modalComponent";
import {
  clearOder,
  clearIngredient,
  closeModal,
} from "../../services/actions/actionsTypes";

export default function Modal() {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, children } = useSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearIngredient());
    dispatch(clearOder());
  };
  if (!isOpen) {
    return null;
  }
  const RenderModal = modalComponent[children];

  return ReactDOM.createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal}>
        <RenderModal handleClose={handleClose} />
      </div>
    </>,
    modalRoot
  );
}
