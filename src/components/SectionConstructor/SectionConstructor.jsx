import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import styles from "./SectionConstructor.module.css";
import { useDrop } from "react-dnd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  addIngredient,
  addBun,
  incrementBun,
  setBaseSelected,
  setBaseElement,
  setMiddleElements,
} from "../../services/actions/actionsTypes";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";
import { v4 as uuidv4 } from "uuid";

export default function SectionConstructor() {
  const dispatch = useDispatch();
  const { hasBaseSelected, baseElement, middleElement } = useSelector(
    (state) => state.burger
  );

  const dropOption = {
    accept: "card",
    drop: (item) => {
      if (item.ingredient.type === "bun") {
        dispatch(setBaseElement(item));
        dispatch(setBaseSelected(true));
        dispatch(addBun(item.ingredient._id));
        dispatch(incrementBun(item.ingredient._id));
      }
      if (baseElement !== null && item.ingredient.type !== "bun") {
        dispatch(addIngredient(item.ingredient._id));
        dispatch(incrementCount(item.ingredient._id));
        dispatch(
          setMiddleElements([...middleElement, { ...item, uuid: uuidv4() }])
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  };
  const [{ isOver }, ref] = useDrop(dropOption);
  const dropHighlight = isOver ? styles.dropHighlight : "";

  const totalPrice = React.useMemo(() => {
    let total = 0;
    if (baseElement) {
      total += baseElement.ingredient.price;
    }
    if (middleElement.length) {
      middleElement.forEach((element) => {
        total += element.ingredient.price;
      });
    }
    return total;
  }, [baseElement, middleElement]);

  return (
    <div className={`${styles.section} ${dropHighlight}`} ref={ref}>
      {!hasBaseSelected ? (
        <span className={`${styles.spanElement} text text_type_main-medium`}>
          Выберите основу для бургера
        </span>
      ) : (
        baseElement && (
          <div className={styles.uplist}>
            <div>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${baseElement.ingredient.name} (верх)`}
                price={baseElement.ingredient.price / 2}
                thumbnail={baseElement.ingredient.image}
              />
            </div>

            <div className={`${styles.list} custom-scroll`}>
              {hasBaseSelected &&
                (middleElement.length === 0 ? (
                  <span
                    className={`${styles.spanElement} text text_type_main-medium`}
                  >
                    Выберите ингредиенты для бургера
                  </span>
                ) : (
                  middleElement.map((element, index) => {
                    return (
                      <IngredientsContainer
                        key={element.uuid}
                        element={element}
                        index={index}
                      />
                    );
                  })
                ))}
            </div>
            {baseElement && (
              <div>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${baseElement.ingredient.name} (низ)`}
                  price={baseElement.ingredient.price / 2}
                  thumbnail={baseElement.ingredient.image}
                />
              </div>
            )}
          </div>
        )
      )}
      {totalPrice > 0 && (
        <Total
          totalPrice={totalPrice}
          hasBaseSelected={hasBaseSelected}
          setMiddleElements={setMiddleElements}
          setBaseElement={setBaseElement}
        />
      )}
    </div>
  );
}
