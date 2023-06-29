import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const openModal = (modal, content) => {
    setShowModal(modal);
    setModalContent(content);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section openModal={openModal} />
        <SectionConstructor openModal={openModal} />
      </DndProvider>
      {showModal && (
        <Modal onClose={closeModal}>
          {showModal === "ingridient" && (
            <IngredientDetails ingredient={modalContent} />
          )}
          {showModal === "order" && <OrderDetails />}
        </Modal>
      )}
    </div>
  );
}
