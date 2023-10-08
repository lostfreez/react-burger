import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useAppSelector } from "../../services/types/typedHooks";
import React from "react";
import FeedDetails from "../FeedDetails/FeedDetails";

const ModalContainer: React.FC = () => {
  const { modalType, isOpen } = useAppSelector((state) => state.modal);
  const prevIsOpenRef = React.useRef(isOpen);
  React.useEffect(() => {
    if (prevIsOpenRef.current === true && isOpen === false) {
      window.history.replaceState(null, "", "/");
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <Modal>
      {modalType === "ingredient" && <IngredientDetails />}
      {modalType === "order" && <OrderDetails />}
      {modalType === "orderId" && <FeedDetails />}
    </Modal>
  );
};

export default ModalContainer;
