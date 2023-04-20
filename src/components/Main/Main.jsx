import Header from "../Header/Header";
import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import React from "react";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

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
    <div>
      <Header />
      <div className={styles.sections}>
        <Section ingredients={ingredients} openModal={openModal} />
        <SectionConstructor firstIngredient={firstIngredient} openModal={openModal}/>
      </div>
      {showModal && (
        <>
        <Modal
          onClose={closeModal}
          showModal={showModal}
          modalContent={modalContent}
        />
        <ModalOverlay onClose={closeModal}/>
        </>
      )}
    </div>
  );
}
