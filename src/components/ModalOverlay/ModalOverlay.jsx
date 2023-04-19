import React from 'react'
import styles from './ModalOverlay.module.css';
import ReactDOM from "react-dom";

export default function ModalOverlay({onClose}) {
    const modalRoot = document.getElementById("modal-overlay");
    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleClick}></div>,
    modalRoot 
  )
}
