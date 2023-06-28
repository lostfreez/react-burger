import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import styles from "./SectionConstructor.module.css";
import { useDrop } from "react-dnd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCount } from "../../services/actions/countAction";
import { decrementCount } from "../../services/actions/countAction";

export default function SectionConstructor({ openModal }) {
  const dispatch = useDispatch();
  const dropOption = {
    accept: "card",
    drop: (item) => {
      console.log(item);
      if (item.ingredient.type === "bun") {
        setBaseElement(item);
        setHasBaseSelected(true);
      } else {
        dispatch(incrementCount(item.ingredient._id));
        setMiddleElements((state) => [...state, item]);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  };
  const [{ isOver }, dropRef] = useDrop(dropOption);
  const dropHighlight = isOver ? styles.dropHighlight : "";
  const [hasBaseSelected, setHasBaseSelected] = useState(false);
  const [baseElement, setBaseElement] = useState(null);
  const [middleElement, setMiddleElements] = useState([]);
  const handleRemoveElement = (indexToRemove, ingredientId) => {
    dispatch(decrementCount(ingredientId));
    setMiddleElements((state) => state.filter((item, index) => index !== indexToRemove));
  }

  return (
    <div className={`${styles.section} ${dropHighlight}`} ref={dropRef}>
      <div className={styles.uplist}>
        <div className={styles.topElement}>
          {!hasBaseSelected ? (
            <span>Выберите основу для бургера</span>
          ) : (
            baseElement && (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={baseElement.ingredient.name}
                price={baseElement.ingredient.price}
                thumbnail={baseElement.ingredient.image}
              />
            )
          )}
        </div>
        <div className={`${styles.list} custom-scroll`}></div>
        {hasBaseSelected &&
          (middleElement.length === 0 ? (
            <span>Выберите ингридиенты для бургера</span>
          ) : (
            middleElement.map((middleElement, index) => (
              <ConstructorElement
                key={`${middleElement.ingredient._id}-${index}`}
                text={middleElement.ingredient.name}
                price={middleElement.ingredient.price}
                thumbnail={middleElement.ingredient.image}
                handleClose={() => handleRemoveElement(index, middleElement.ingredient._id)}
              />
            ))
          ))}
        <div className={styles.bottomElement}>
          {baseElement && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={baseElement.ingredient.name}
              price={baseElement.ingredient.price}
              thumbnail={baseElement.ingredient.image}
            />
          )}
        </div>
      </div>
      <Total openModal={openModal} />
    </div>
  );
}
