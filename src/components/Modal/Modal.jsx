import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { closeModal } from "../../services/actions/modalActions";
import { clearIngredient } from "../../services/actions/ingredientViewAction";
import { clearOder } from "../../services/actions/clearOderAction";

export default function Modal() {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearIngredient());
    dispatch(clearOder());
  };
  if (!isOpen) {
    return null;
  }
  let children;
  if (modalType === "ingredient") {
    children = <IngredientDetails />;
  }
  if (modalType === "order") {
    children = <OrderDetails />;
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
