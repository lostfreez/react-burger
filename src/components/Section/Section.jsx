import React from "react";
import styles from "./Section.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { selectIngredients, selectBuns, selectSauces, selectMains } from "../../services/selectors/ingredientsSelectors";

export default function Section({ openModal }) {
  const [current, setCurrent] = React.useState("one");
  const ingredients = useSelector(selectIngredients);
  const buns = useSelector(selectBuns);
  const sauces = useSelector(selectSauces);
  const mains = useSelector(selectMains);

  return ingredients.length ? (
    <div className={`${styles.section} custom-scroll`}>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <div className={styles.switcher}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.list} custom-scroll`}>
        <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
        <ul className={styles.table}>
          {buns.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              openModal={openModal}
            />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
        <ul className={styles.table}>
          {sauces.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              openModal={openModal}
            />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
        <ul className={styles.table}>
          {mains.map((ingredient) => (
            <Card
              key={ingredient._id}
              ingredient={ingredient}
              openModal={openModal}
            />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    "Загрузка..."
  );
}
