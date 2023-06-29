import { useSelector, useDispatch } from 'react-redux';
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import IngredientDetails from '../IngredientDetails/IngredientDetails';

export default function Modal() {
  const modalRoot = document.getElementById("modal-root");
  const {isOpen, modalType}  = useSelector(state => state.modal);
  if (!isOpen){
    return null;
  }
  let children;
  if (modalType === 'ingredient'){
    children = <IngredientDetails />
  }
    
  return ReactDOM.createPortal(
    <>
    <ModalOverlay  />
    <div className={styles.modal}>
      <button className={styles.close} >
        <CloseIcon type="primary" />
      </button>
        {children}
    </div>
  </>,
    modalRoot
  );
}
