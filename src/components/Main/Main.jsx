import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";


export default function Main({ ingredients }) {
  const firstIngredient = ingredients[Object.keys(ingredients)[0]];
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
        <Section ingredients={ingredients} openModal={openModal} />
        <SectionConstructor firstIngredient={firstIngredient} openModal={openModal}/>
      {showModal && (
        <Modal onClose={closeModal}>
        {showModal === "ingridient" && (
          <IngredientDetails ingredient={modalContent} />
        )}
        {showModal === "order" && (
          <OrderDetails />
        )}
      </Modal>
      )}
    </div>
  );
}
