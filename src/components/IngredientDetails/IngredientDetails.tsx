import styles from "../IngredientDetails/IngredientDetails.module.css";
import { useSelector } from "react-redux";
import { Ingredient } from "../../services/types/types";

const IngredientDetails: React.FC = () => {
  const ingredient = useSelector(
    (state: { ingredient: Ingredient }) => state.ingredient
  );
  return (
    <>
      <p className={`${styles.text} text text_type_main-large  ml-10 mt-10`}>
        Детали ингридиента
      </p>
      <img
        className={`${styles.image} ml-30 mr-30`}
        src={ingredient.image_large}
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
};

export default IngredientDetails;
