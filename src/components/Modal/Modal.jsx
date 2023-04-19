import React from "react";
import ReactDOM from "react-dom";
import styles from "../Modal/Modal.module.css";

export default function Modal({ingredient, onClose}) {
  const modalRoot = document.getElementById("modal");
  return ReactDOM.createPortal(
    <div className={styles.modal}
    onClick={onClose}>
      <p className="text text_type_main-large mt-10 ml-10"
      style={{alignSelf: "start"}}>
        Детали ингридиента
      </p>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default mt-2">{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default mt-2">{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default mt-2">{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default mt-2">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>,
    modalRoot
  );
}
