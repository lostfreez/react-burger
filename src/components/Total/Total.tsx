import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";
import { useDispatch } from "react-redux";
import { createOrder } from "../../services/actions/orderAction";
import styles from "./Total.module.css";
import { AppDispatch } from "../../services/store";
import { clearBurger } from "../../services/reducers/burgerReducer";
import {
  openModal,
  switchLoading,
} from "../../services/reducers/modalReducers";
import { clearCount } from "../../services/reducers/countReducer";
import { clearIngredients } from "../../services/reducers/ingredientsListReducer";
import { clearOrder } from "../../services/reducers/orderReducer";

interface Props {
  totalPrice: number;
}

const Total: React.FC<Props> = ({ totalPrice }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick =async() => {
    dispatch(clearOrder());
    dispatch(switchLoading());
    dispatch(openModal("order"));
    await dispatch(createOrder());
    dispatch(switchLoading());
    dispatch(clearCount());
    dispatch(clearIngredients());
    dispatch(clearBurger());
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
};

export default Total;
