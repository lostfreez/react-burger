import React from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

export default function Modal({ onClose, showModal, modalContent }) {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        <CloseIcon type="primary" />
      </button>
      {showModal === "ingridient" && (
        <IngredientDetails ingredient={modalContent} />
      )}
      {showModal ==="order" && (
        <OrderDetails />
      )}
    </div>,
    modalRoot
  );
}
