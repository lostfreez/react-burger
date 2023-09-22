import Section from "../Section/Section";
import SectionConstructor from "../SectionConstructor/SectionConstructor";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector } from "react-redux";
import { ModalState } from "../../services/types/types";

const Main: React.FC = () => {
  const { modalType } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );

  return (
    <div className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        <Section />
        <SectionConstructor />
      </DndProvider>
      <Modal>
        {modalType === "ingredient" && <IngredientDetails />}
        {modalType === "order" && <OrderDetails />}
      </Modal>
    </div>
  );
};

export default Main;
