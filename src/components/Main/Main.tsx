import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector } from "react-redux";
import { ModalState } from "../../services/types/types";
import React from "react";

const Main: React.FC = () => {
  const { modalType, isOpen } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );
  const prevIsOpenRef = React.useRef(isOpen);
  React.useEffect(() => {
    if (prevIsOpenRef.current === true && isOpen === false) {
      window.history.replaceState(null, "", "/");
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section />
        <SectionConstructor />
      </DndProvider>
      <Modal>
        {modalType === "ingredient" && <IngredientDetails />}
        {modalType === "order" && <OrderDetails />}
      </Modal>
    </div>
  );
};

export default Main;
