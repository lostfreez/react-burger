import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { closeModal } from "../../services/reducers/modalReducers";
import { useNavigate } from "react-router-dom";



interface ModalState{
  isOpen: boolean;
  isLoading: boolean;
}
interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("modal-root");
  const { isOpen, isLoading } = useSelector((state: {modal: ModalState}) => state.modal);
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
    modalRoot!
  );
}

export default Modal;