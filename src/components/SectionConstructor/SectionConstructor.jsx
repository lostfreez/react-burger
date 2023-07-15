import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import styles from "./SectionConstructor.module.css";
import { useDrop } from "react-dnd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  addIngredient,
  addBun,
  incrementBun
} from "../../services/actions/actionsTypes";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";
import { v4 as uuidv4 } from "uuid";

export default function SectionConstructor() {
  const dispatch = useDispatch();
  const [hasBaseSelected, setHasBaseSelected] = React.useState(false);
  const [baseElement, setBaseElement] = React.useState(null);
  const [middleElement, setMiddleElements] = React.useState([]);

  const dropOption = {
    accept: "card",
    drop: (item) => {
      if (item.ingredient.type === "bun") {
        setBaseElement(item);
        setHasBaseSelected(true);
        dispatch(addBun(item.ingredient._id));
        dispatch(incrementBun(item.ingredient._id));
      }
      if (baseElement !== null && item.ingredient.type !== "bun") {
        dispatch(addIngredient(item.ingredient._id));
        dispatch(incrementCount(item.ingredient._id));
        setMiddleElements((state) => [...state, { ...item, uuid: uuidv4() }]);
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
                  middleElement.map((middleElement, index) => {
                    return (
                      <IngredientsContainer
                        key={middleElement.uuid}
                        middleElement={middleElement}
                        index={index}
                        setMiddleElements={setMiddleElements}
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
      {totalPrice > 0 && <Total totalPrice={totalPrice} setHasBaseSelected={setHasBaseSelected} setMiddleElements={setMiddleElements} setBaseElement={setBaseElement}/>}
    </div>
  );
}
