import React from 'react'
import styles from './ModalOverlay.module.css';
import ReactDOM from "react-dom";

export default function ModalOverlay({onClose}) {
    const modalOverlay = document.getElementById("modal-overlay");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
  
    React.useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}></div>,
    modalOverlay 
  )
}
