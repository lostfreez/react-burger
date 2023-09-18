import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { closeModal } from "../../services/actions/actionsTypes";
import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, isLoading } = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(closeModal());
    navigate("/");
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
    modalRoot
  );
}
