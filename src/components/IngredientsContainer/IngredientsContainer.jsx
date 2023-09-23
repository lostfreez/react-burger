import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import {
  swapIngredient,
  removeIngredient,
  decrementCount,
  setMiddleElements,
} from "../../services/actions/actionsTypes";
import React from "react";

export default function IngredientsContainer({ element, index }) {
  const dispatch = useDispatch();
  const { middleElement } = useSelector((state) => state.burger);
  const handleRemove = (indexToRemove, ingredientId) => {
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
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  };
  const moveElement = (dragIndex, hoverIndex) => {
    const newElements = [...middleElement];
    let temp = newElements[dragIndex];
    newElements[dragIndex] = newElements[hoverIndex];
    newElements[hoverIndex] = temp;
    dispatch(setMiddleElements(newElements));
    dispatch(swapIngredient(newElements));
  };
  const dropOption = {
    accept: "ingredient",
    drop: (item) => {
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
  const ref = React.useRef();
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
}
