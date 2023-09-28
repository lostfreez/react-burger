import React from "react";
import styles from "./ModalOverlay.module.css";

interface Props {
  handleClose: () => void;
}

  const ModalOverlay: React.FC<Props> = ({ handleClose }) => {
  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
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

export default ModalOverlay;