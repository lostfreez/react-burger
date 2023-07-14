import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { modalComponent } from "../../services/modalComponent/modalComponent";
import {
  clearOder,
  clearIngredient,
  closeModal,
} from "../../services/actions/actionsTypes";
import Loader from "../Loader/Loader";

export default function Modal() {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, children, loader } = useSelector((state) => state.modal);
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
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.modal}>
          <button className={styles.close} onClick={handleClose}>
            <CloseIcon type="primary" />
          </button>
          <RenderModal />
        </div>
      )}
    </>,
    modalRoot
  );
}
