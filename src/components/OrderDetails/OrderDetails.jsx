import styles from "./OrderDetails.module.css";
import done from "../../image/done.png";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderDetails({ handleClose }) {
  const order = useSelector((state) => state.order);
  if (!order.orderNumber) {
    return <Loader />;
  }

  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={handleClose}>
        <CloseIcon type="primary" />
      </button>
      <p className={`${styles.order} text text_type_digits-large mt-30`}>
        {order.orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказа
      </p>
      <img src={done} alt="done" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default mt-2 text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
