import React from "react";
import styles from "./IngredientWindow.module.css";

export default function IngredientWindow() {
  return (
    <div className={styles.page}>
      <div className={styles.ingredient}>
        <p className={`${styles.text} text text_type_main-large`}>
          Детали ингредиента
        </p>
        <img src="" alt="" className={styles.image} />
        <p className="text text_type_main-medium mt-4 mb-8">
          Биокотлета из марсианской Магнолии
        </p>
        <ul className={styles.foot}>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              244,4
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              12,2
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              17,2
            </p>
          </li>
          <li className={styles.section}>
            <p className="text text_type_main-default mb-2 text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              10,2
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
