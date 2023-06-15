import React from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

export default function Modal({ onClose, children }) {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <>
    <ModalOverlay onClose={onClose} />
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        <CloseIcon type="primary" />
      </button>
        {children}
    </div>
  </>,
    modalRoot
  );
}
