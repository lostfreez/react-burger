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
export default function Section() {
  const [current, setCurrent] = React.useState("one");
  const ingredients = useSelector(selectIngredients);
  const buns = useSelector(selectBuns);
  const sauces = useSelector(selectSauces);
  const mains = useSelector(selectMains);

  React.useEffect(() => {
    console.log(current);
  }, [current]);

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
        threshold: 0.3,
      }
    );
    if (ingredients.length) {
      observer.observe(bunsRef.current);
      observer.observe(saucesRef.current);
      observer.observe(mainsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ingredients]);
  const bunsRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainsRef = React.useRef(null);
  return ingredients.length ? (
    <div className={`${styles.section} custom-scroll`} id="scroll">
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <div className={styles.switcher}>
        <Tab value="one" active={current === "one"}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.list} custom-scroll`}>
        <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
        <ul ref={bunsRef} className={styles.table}>
          {buns.map((ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
        <ul ref={saucesRef} className={styles.table}>
          {sauces.map((ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
        <ul ref={mainsRef} className={styles.table}>
          {mains.map((ingredient) => (
            <Card key={ingredient._id} ingredient={ingredient} />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    "Загрузка..."
  );
}
