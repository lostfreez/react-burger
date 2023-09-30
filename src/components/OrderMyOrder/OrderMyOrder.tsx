import styles from "./OrderMyOrder.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { IngredientsState } from "../../services/types/types";

function OrderMyOrder() {
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );
  return (
    <div className={`${styles.orders} custom-scroll`}>
      <div className={styles.order}>
        <div className={`${styles.id} text text_type_main-medium `}>
          #034535
        </div>
        <div className={`${styles.date} text text_type_main-default  `}>
          Сегодня, 16:20 i-GMT+3
        </div>
        <div className={`${styles.burgerName} text text_type_main-medium `}>
          Death Star Starship Main бургер
        </div>
        <div className={styles.components}>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
        </div>
        <div className={styles.price}>
          <div className="text text_type_digits-default mr-2">480</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={styles.order}>
        <div className={`${styles.id} text text_type_main-medium `}>
          #034535
        </div>
        <div className={`${styles.date} text text_type_main-default  `}>
          Сегодня, 16:20 i-GMT+3
        </div>
        <div className={`${styles.burgerName} text text_type_main-medium `}>
          Death Star Starship Main бургер
        </div>
        <div className={styles.components}>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
        </div>
        <div className={styles.price}>
          <div className="text text_type_digits-default mr-2">480</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={styles.order}>
        <div className={`${styles.id} text text_type_main-medium `}>
          #034535
        </div>
        <div className={`${styles.date} text text_type_main-default  `}>
          Сегодня, 16:20 i-GMT+3
        </div>
        <div className={`${styles.burgerName} text text_type_main-medium `}>
          Death Star Starship Main бургер
        </div>
        <div className={styles.components}>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
        </div>
        <div className={styles.price}>
          <div className="text text_type_digits-default mr-2">480</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={styles.order}>
        <div className={`${styles.id} text text_type_main-medium `}>
          #034535
        </div>
        <div className={`${styles.date} text text_type_main-default  `}>
          Сегодня, 16:20 i-GMT+3
        </div>
        <div className={`${styles.burgerName} text text_type_main-medium `}>
          Death Star Starship Main бургер
        </div>
        <div className={styles.components}>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              alt={ingredientsData[0].name}
              src={ingredientsData[0].image_mobile}
            />
          </div>
        </div>
        <div className={styles.price}>
          <div className="text text_type_digits-default mr-2">480</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export default OrderMyOrder;
