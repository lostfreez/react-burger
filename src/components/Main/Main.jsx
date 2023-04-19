import Header from "../Header/Header";
import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";

export default function Main({ ingredients }) {
  const firstIngredient = ingredients[Object.keys(ingredients)[0]];
  return (
    <div>
      <Header />
      <div className={styles.sections}>
        <Section ingredients={ingredients} />
        <SectionConstructor firstIngredient={firstIngredient} />
      </div>
      <div id="modal"></div>
      <div id="modal-overlay"></div>
    </div>
  );
}
