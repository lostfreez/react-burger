import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";
import styles from "./Total.module.css";
import { makeOrder } from "../../services/actions/makeOrderAction";
import { updateToken } from "../../services/actions/updateTokenAction";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/types/typedHooks";

interface Props {
  totalPrice: number;
}

const Total: React.FC<Props> = ({ totalPrice }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    const result = await dispatch(updateToken());
    if (result && result.success === true) {
      makeOrder(dispatch);
    } else {
      navigate(`/login`);
    }
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
