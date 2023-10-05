import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { setMiddleElements } from "../../services/reducers/burgerReducer";
import React from "react";
import { useAppDispatch } from "../../services/types/typedHooks";
import { Ingredient } from "../../services/types/types";
import {
  swapIngredient,
  removeIngredient,
} from "../../services/reducers/ingredientsListReducer";
import { decrementCount } from "../../services/reducers/countReducer";
import { useAppSelector } from "../../services/types/typedHooks";
import styles from "./IngredientsContainer.module.css"

interface DropItem {
  index: number;
}

interface Props {
  element: { ingredient: Ingredient };
  index: number;
}

const IngredientsContainer: React.FC<Props> = ({ element, index }) => {
  const dispatch = useAppDispatch();
  const { middleElement } = useAppSelector((state) => state.burger);
  const handleRemove = (indexToRemove: number, ingredientId: string) => {
    dispatch(decrementCount(ingredientId));
    dispatch(removeIngredient(ingredientId));
    const updateMiddleElement = middleElement.filter(
      (item, index) => index !== indexToRemove
    );
    dispatch(setMiddleElements(updateMiddleElement));
  };
  const moveOption = {
    type: "ingredient",
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDrag: monitor.isDragging(),
    }),
  };
  const moveElement = (dragIndex: number, hoverIndex: number) => {
    const newElements = [...middleElement];
    let temp = newElements[dragIndex];
    newElements[dragIndex] = newElements[hoverIndex];
    newElements[hoverIndex] = temp;
    dispatch(setMiddleElements(newElements));
    dispatch(swapIngredient(newElements.map((e) => e.ingredient._id)));
  };
  const dropOption = {
    accept: "ingredient",
    drop: (item: DropItem) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
    },
  };
  const [, dropRef] = useDrop(dropOption);
  const [, dragRef] = useDrag(moveOption);
  const ref = React.useRef<HTMLDivElement>(null);
  dragRef(ref);
  dropRef(ref);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.imgWrapper}>
      <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={element.ingredient.name}
        price={element.ingredient.price}
        thumbnail={element.ingredient.image}
        handleClose={() => handleRemove(index, element.ingredient._id)}
      />
    </div>
  );
};

export default IngredientsContainer;
