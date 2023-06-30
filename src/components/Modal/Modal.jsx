import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { closeModal } from "../../services/actions/modalActions";

export default function Modal() {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(closeModal());
  };
  if (!isOpen) {
    return null;
  }
  let children;
  if (modalType === "ingredient") {
    children = <IngredientDetails />;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={handleClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    modalRoot
  );
}
