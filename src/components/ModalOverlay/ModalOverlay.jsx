import React from 'react'
import styles from './ModalOverlay.module.css';

export default function ModalOverlay() {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        
      }
    };
  
    React.useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return (
    <div className={styles.overlay}></div>
  );
}
