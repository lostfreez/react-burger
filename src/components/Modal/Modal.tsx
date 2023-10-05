import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { closeModal } from "../../services/reducers/modalReducers";
import { useAppDispatch } from "../../services/types/typedHooks";
import { useAppSelector } from "../../services/types/typedHooks";

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, isLoading } = useAppSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(closeModal());
  };
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal}>
        {!isLoading && (
          <button className={styles.close} onClick={handleClose}>
            <CloseIcon type="primary" />
          </button>
        )}
        {children}
      </div>
    </>,
    modalRoot!
  );
};

export default Modal;
