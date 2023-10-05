import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";

const Main: React.FC = () => {
  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section />
        <SectionConstructor />
      </DndProvider>
    </div>
  );
};

export default Main;
