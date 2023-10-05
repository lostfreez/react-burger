import React from "react";
import styles from "./Section.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import {
  selectIngredients,
  selectBuns,
  selectSauces,
  selectMains,
} from "../../services/selectors/ingredientsSelectors";
import { Ingredient } from "../../services/types/types";

const Section: React.FC = () => {
  const [current, setCurrent] = React.useState("one");
  const ingredients = useSelector(selectIngredients);
  const buns = useSelector(selectBuns);
  const sauces = useSelector(selectSauces);
  const mains = useSelector(selectMains);

  React.useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === bunsRef.current) {
            setCurrent("one");
          } else if (entry.target === saucesRef.current) {
            setCurrent("two");
          } else if (entry.target === mainsRef.current) {
            setCurrent("three");
          }
        }
      },
      {
        root: document.getElementById("Scroll"),
        threshold: 0.2,
      }
    );
    if (ingredients.length) {
      if (bunsRef.current) {
        observer.observe(bunsRef.current);
      }
      if (saucesRef.current) {
        observer.observe(saucesRef.current);
      }
      if (mainsRef.current) {
        observer.observe(mainsRef.current);
      }
    }
    return () => {
      observer.disconnect();
    };
  }, [ingredients]);
  const bunsRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainsRef = React.useRef(null);
  return (
    <div className={styles.section}>
      <p className={`${styles.header} text text_type_main-large mt-10 mb-5`}>Соберите бургер</p>
      <div className={styles.switcher}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={(value) => setCurrent(value)}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={(value) => setCurrent(value)}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={(value) => setCurrent(value)}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.list} custom-scroll`} id="scroll">
        <p className={`${styles.nameCategory} text text_type_main-medium mt-10 mb-6`}>Булки</p>
        <ul ref={bunsRef} className={styles.table}>
          {buns.map((ingredient: Ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
        <p className={`${styles.nameCategory} text text_type_main-medium mt-10 mb-6`}>Соусы</p>
        <ul ref={saucesRef} className={styles.table}>
          {sauces.map((ingredient: Ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
        <p className={`${styles.nameCategory} text text_type_main-medium mt-10 mb-6`}>Начинки</p>
        <ul ref={mainsRef} className={styles.table}>
          {mains.map((ingredient: Ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section;
