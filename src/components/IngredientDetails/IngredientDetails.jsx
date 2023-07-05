import React from "react";
import ReactDOM from "react-dom";
import styles from "../IngredientDetails/IngredientDetails.module.css";

export default function IngredientDetails({ ingredient }) {
  return (
    <>
      <p
        className={`${styles.cardContainer}text text_type_main-large mt-10 ml-10"`}
      >
        Детали ингридиента
      </p>
      <img
        className={`${styles.image} ml-30 mr-30`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <ul className={`${styles.list}`}>
        <li className={styles.item}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default mt-2">
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default mt-2">
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default mt-2">{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default mt-2">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}
