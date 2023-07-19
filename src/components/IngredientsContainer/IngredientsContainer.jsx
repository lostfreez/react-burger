import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import {
  swapIngredient,
  removeIngredient,
  decrementCount,
} from "../../services/actions/actionsTypes";
import React from "react";

export default function IngredientsContainer({
  middleElement,
  index,
  setMiddleElements,
}) {
  const dispatch = useDispatch();
  const handleRemove = (indexToRemove, ingredientId) => {
    dispatch(decrementCount(ingredientId));
    dispatch(removeIngredient(ingredientId));
    setMiddleElements((state) =>
      state.filter((item, index) => index !== indexToRemove)
    );
  };
  const moveOption = {
    type: "ingredient",
    item: { index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  };
  const moveElement = React.useCallback(
    (dragIndex, hoverIndex) => {
      setMiddleElements((prevElements) => {
        const newElements = [...prevElements];
        let temp = newElements[dragIndex];
        newElements[dragIndex] = newElements[hoverIndex];
        newElements[hoverIndex] = temp;
        dispatch(swapIngredient(newElements));
        return newElements;
      });
    },
    [setMiddleElements, dispatch]
  );
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
        text={middleElement.ingredient.name}
        price={middleElement.ingredient.price}
        thumbnail={middleElement.ingredient.image}
        handleClose={() => handleRemove(index, middleElement.ingredient._id)}
      />
    </div>
  );
}
