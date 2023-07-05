import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "../Modal/Modal";

export default function Main() {
  

  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section  />
        <SectionConstructor />
      </DndProvider>
      <Modal />
    </div>
  );
}
