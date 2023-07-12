import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/actionsTypes";
import { createOrder } from "../../services/actions/orderAction";
import  styles  from "./Total.module.css";

export default function Total({ totalPrice }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal("order"));
    dispatch(createOrder());
  };

  return (
    <div className={styles.total}>
      <p className="text text_type_main-large mr-2">{totalPrice}</p>
      <img src={price} alt="Изображение цены" />
      <Button
        onClick={handleClick}
        htmlType="button"
        type="primary"
        size="large"
        extraClass="ml-10"
      >
        Оформить заказ
      </Button>
    </div>
  );
}
