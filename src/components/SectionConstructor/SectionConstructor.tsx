import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import styles from "./SectionConstructor.module.css";
import { useDrop, DropTargetMonitor } from "react-dnd";
import React from "react";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";
import { v4 as uuidv4 } from "uuid";
import {
  setBaseSelected,
  setBaseElement,
  setMiddleElements,
} from "../../services/reducers/burgerReducer";
import {
  incrementCount,
  incrementBun,
} from "../../services/reducers/countReducer";
import {
  addIngredient,
  addBun,
} from "../../services/reducers/ingredientsListReducer";
import { MiddleElement } from "../../services/types/types";
import { useAppDispatch } from "../../services/types/typedHooks";
import { useAppSelector } from "../../services/types/typedHooks";

const SectionConstructor: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hasBaseSelected, baseElement, middleElement } = useAppSelector(
    (state) => state.burger
  );

  const dropOption = {
    accept: "card",
    drop: (item: MiddleElement) => {
      if (item.ingredient.type === "bun") {
        dispatch(setBaseElement(item));
        dispatch(setBaseSelected(true));
        dispatch(addBun(item.ingredient));
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
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
    }),
  };
  const [{ isOver }, ref] = useDrop(dropOption);
  const dropHighlight = isOver ? styles.dropHighlight : "";

  const totalPrice = React.useMemo(() => {
    let total = 0;
    if (baseElement) {
      total += baseElement.ingredient.price * 2;
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
        <div className={`${styles.spanElement} text text_type_main-medium`}>
          Выберите основу для бургера
        </div>
      ) : (
        baseElement && (
          <div className={styles.uplist}>
            <div className={styles.bun}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${baseElement.ingredient.name} (верх)`}
                price={baseElement.ingredient.price}
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
              <div className={styles.bun}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${baseElement.ingredient.name} (низ)`}
                  price={baseElement.ingredient.price}
                  thumbnail={baseElement.ingredient.image}
                />
              </div>
            )}
          </div>
        )
      )}
      {totalPrice > 0 && <Total totalPrice={totalPrice} />}
    </div>
  );
};

export default SectionConstructor;
