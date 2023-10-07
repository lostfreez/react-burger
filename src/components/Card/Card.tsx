import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Card.module.css";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../services/types/typedHooks";
import { viewIngredient } from "../../services/reducers/ingredientViewReducer";
import { openModal } from "../../services/reducers/modalReducers";
import { clearIngredient } from "../../services/reducers/ingredientViewReducer";
import { Ingredient } from "../../services/types/types";

interface Props {
  ingredient: Ingredient;
}

const Card: React.FC<Props> = ({ ingredient }) => {
  const dispatch = useAppDispatch();
  const dragOptions = {
    type: "card",
    item: { ingredient },
    collect: (monitor: DragSourceMonitor) => ({
      isDrag: monitor.isDragging(),
    }),
  };
  const [, dragRef] = useDrag(dragOptions);
  const count = useAppSelector(state => state.counter.ingredients[ingredient._id] || 0);

  const handleClick = () => {
    dispatch(clearIngredient());
    dispatch(viewIngredient(ingredient));
    dispatch(openModal("ingredient"));
    window.history.pushState(null, '', `/ingredients/${ingredient._id}`);
  };

  return (
    <li className={`${styles.cardDrag}`} onClick={handleClick} ref={dragRef}>
      <img src={ingredient.image} alt={ingredient.name} />
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
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
};

export default Card;
