import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modalActions";
import { createOrder } from "../../services/actions/orderAction";


export default function Total({  totalPrice }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal("order"));
    dispatch(createOrder());
  };
 
  return (
    <div
      className={"mt-10 mr-4"}
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
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
