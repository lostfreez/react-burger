import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import price from "../../image/price.svg";

export default function Total({ openModal, totalPrice }) {
  return (
    <div
      className={"mt-10 mr-4"}
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <p className="text text_type_main-large mr-2">{totalPrice}</p>
      <img src={price} alt="Изображение цены" />
      <Button
        onClick={() => openModal("order")}
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
