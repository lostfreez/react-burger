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
        <div
          className="ml-8 mr-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={firstIngredient.image}
          />
        </div>
        <div className={`${styles.list} custom-scroll`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon />
            <div
              className="ml-2 mr-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={firstIngredient.image}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon />
            <div
              className="ml-2 mr-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={firstIngredient.image}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon />
            <div
              className="ml-2 mr-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={firstIngredient.image}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon />
            <div
              className="ml-2 mr-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={firstIngredient.image}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon />
            <div
              className="ml-2 mr-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={firstIngredient.image}
              />
            </div>
          </div>
        </div>
        <div
          className="ml-8 mr-4"
          style={{ display: "flex", alignItems: "center" }}
        >
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
