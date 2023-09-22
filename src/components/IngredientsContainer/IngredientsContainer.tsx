import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { setMiddleElements } from "../../services/reducers/burgerReducer";
import React from "react";
import { AppDispatch } from "../../services/store";
import { Ingredient } from "../../services/types/types";
import {
  swapIngredient,
  removeIngredient,
} from "../../services/reducers/ingredientsListReducer";
import { decrementCount } from "../../services/reducers/countReducer";
import { BurgerState } from "../../services/types/types";

interface BurgerProps {
  ingredient: Ingredient;
}
interface DropItem {
  index: number;
}

interface Props {
  element: BurgerProps;
  index: number;
}

const IngredientsContainer: React.FC<Props> = ({ element, index }) => {
  const dispatch: AppDispatch = useDispatch();
  const { middleElement } = useSelector(
    (state: { burger: BurgerState }) => state.burger
  );
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
    <div ref={ref}>
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
