import React from "react";
import styles from "./Section.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

export default function Section({ ingredients }) {
  const [current, setCurrent] = React.useState("one");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState(null);

  const openModal = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);
  const buns = ingredients.filter((ingredient) => ingredient.type === "bun");
  const sauces = ingredients.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  const mains = ingredients.filter((ingredient) => ingredient.type === "main");

  return (
    <div className={`${styles.section} custom-scroll`}>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.list} custom-scroll`}>
        <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
        <ul className={styles.table}>
          {buns.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              onCardClick={openModal}
            />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
        <ul className={styles.table}>
          {sauces.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              onCardClick={openModal}
            />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
        <ul className={styles.table}>
          {mains.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              onCardClick={openModal}
            />
          ))}
        </ul>
        {isModalOpen && (
          <Modal onClose={closeModal} ingredient={selectedIngredient} />
        )}
        {isModalOpen && <ModalOverlay onClose={closeModal} />}
      </div>
    </div>
  );
}
