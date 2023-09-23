import React from "react";
import styles from "./ModalOverlay.module.css";

export default function ModalOverlay({ handleClose }) {
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return <div className={styles.overlay} onClick={handleClose}></div>;
}
