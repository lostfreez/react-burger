import styles from "./OrderDetails.module.css";
import done from "../../image/done.png";
import React from "react";
import { useAppSelector } from "../../services/types/typedHooks";

const OrderDetails: React.FC = () => {
  const order = useAppSelector((state) => state.order);
  const [Number, setNumber] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (order.orderNumber) {
      setNumber(order.orderNumber);
    }
  }, [order.orderNumber]);

  return (
    <div className={styles.modal}>
      {Number ? (
        <p className={`${styles.order} text text_type_digits-large mt-30`}>
          {Number ? Number : ""}
        </p>
      ) : (
        <div className={`${styles.loader} mt-30`}></div>
      )}
      <p className="text text_type_main-medium mt-8 mb-15">
        {Number ? "идентификатор заказа" : "Готовим Ваш заказ, ожидайте..."}
      </p>
      <img src={done} alt="done" />
      <p className="text text_type_main-default mt-15">
        {Number ? "Ваш заказ готов" : "Ваш заказ начали готовить"}
      </p>
      <p className="text text_type_main-default mt-2 text_color_inactive mb-30">
        {Number
          ? "Вы можете получить свой заказ в зоне выдачи"
          : "Дождитесь готовности на орбитальной станции"}
      </p>
    </div>
  );
};

export default OrderDetails;
