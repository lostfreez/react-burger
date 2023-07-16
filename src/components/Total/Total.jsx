import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";
import { useDispatch } from "react-redux";
import {
  openModal,
  clearCount,
  clearIngredients,
  switchLoading,
} from "../../services/actions/actionsTypes";
import { createOrder } from "../../services/actions/orderAction";
import styles from "./Total.module.css";

export default function Total({
  totalPrice,
  setMiddleElements,
  setBaseElement,
  setHasBaseSelected,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(switchLoading());
    dispatch(openModal("order"));
    dispatch(createOrder());
    setHasBaseSelected(false);
    setMiddleElements([]);
    setBaseElement(null);
    dispatch(clearCount());
    dispatch(clearIngredients());
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
