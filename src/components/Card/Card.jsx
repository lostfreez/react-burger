import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Card.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";


export default function Card({ ingredient, openModal }) {
  const dragOptions = {
    type: "card",
    item: { ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  };
  const [{ isDrag }, dragRef] = useDrag(dragOptions);
  return (
    <li
      className={`${styles.card}`}
      onClick={() => openModal('ingridient', ingredient)}
      ref={dragRef}
    >
      <img src={ingredient.image} alt={ingredient.name} />
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={styles.cardContainer}>
        <p className="text text_type_main-medium mr-1 mt-1">
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default mt-1 ${styles.cardText}`}>
        {ingredient.name}
      </p>
    </li>
  );
}
