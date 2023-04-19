import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Card.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Card({ ingredient }) {
  return (
    <li className={styles.card}>
      <img src={ingredient.image} alt={ingredient.name} />
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={styles.cardContainer}>
        <p className="text text_type_main-medium mr-1 mt-1">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default mt-1 ${styles.cardText}`}>
        {ingredient.name}
      </p>
    </li>
  );
}
