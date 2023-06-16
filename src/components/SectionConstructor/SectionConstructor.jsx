import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import styles from "./SectionConstructor.module.css";

export default function SectionConstructor({ firstIngredient, openModal }) {
  if (!firstIngredient) {
    return null;
  }

  return (
    <div className={styles.section}>
      <div className={styles.uplist}>
        <div className={styles.topElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={firstIngredient.image}
          />
        </div>
        <div className={`${styles.list} custom-scroll`}>
          {Array(5).fill().map(() => (
            <div className={styles.dragElement}>
              <DragIcon />
              <div className={styles.constructorElement}>
                <ConstructorElement
                  text="Краторная булка N-200i (верх)"
                  price={50}
                  thumbnail={firstIngredient.image}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottomElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={firstIngredient.image}
          />
        </div>
      </div>
      <Total openModal={openModal} />
    </div>
  );
}
