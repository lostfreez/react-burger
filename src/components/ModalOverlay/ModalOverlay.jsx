import React from 'react'
import styles from './ModalOverlay.module.css';

export default function ModalOverlay({onClose}) {
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

  return (
    <div className={styles.overlay} onClick={onClose}></div>
  );
}
