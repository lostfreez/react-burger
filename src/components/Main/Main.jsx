import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector } from "react-redux";

export default function Main() {
  const { children } = useSelector((state) => state.modal);

  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section />
        <SectionConstructor />
      </DndProvider>
      <Modal>
        {children === "ingredient" && <IngredientDetails />}
        {children === "order" && <OrderDetails />}
      </Modal>
    </div>
  );
}
