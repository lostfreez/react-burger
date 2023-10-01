import React from "react";
import styles from "./IngredientWindow.module.css";
import { Ingredient } from "../../services/types/types";

interface Props {
  ingredient: Ingredient;
}
const IngredientWindow: React.FC<Props> = ({ ingredient }) => {
  return (
    <div className={styles.page}>
      <div className={styles.ingredient}>
        <p className={`${styles.text} text text_type_main-large`}>
          Детали ингредиента
        </p>
        <img
          src={ingredient.image_large}
          alt={ingredient.name}
          className={styles.image}
        />
        <p className="text text_type_main-medium mt-4 mb-8">
          {ingredient.name}
        </p>
        <ul className={styles.foot}>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.calories}
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.proteins}
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.fat}
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IngredientWindow;
