import styles from "./OrderFeed.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { IngredientsState } from "../services/types/types";

function OrderFeed() {
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );
  return (
    <div className={styles.feed}>
      <div className={`${styles.head} text text_type_main-large mb-5 mt-10`}>
        Лента заказов
      </div>
      <div className={styles.windowOrders}>
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
        <div className={styles.stats}>
          <div className={styles.windowStats}>
            <div className="text ttext text_type_main-medium">Готовы:</div>
            <div className="text ttext text_type_main-medium">В работе:</div>
            <div className={styles.queueEnd}>
              <p
                className={`${styles.queueText} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} text text_type_digits-default`}
              >
                3425435
              </p>
            </div>
            <div className={styles.queue}>
              <p
                className={`${styles.queueText} ${styles.queueTextWork} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} ${styles.queueTextWork} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} ${styles.queueTextWork} text text_type_digits-default`}
              >
                3425435
              </p>
              <p
                className={`${styles.queueText} ${styles.queueTextWork} text text_type_digits-default`}
              >
                3425435
              </p>
            </div>
          </div>
          <div className="text text_type_main-medium mt-15">
            Выполнено за все время:
          </div>
          <div className="text text_type_digits-large">28 752</div>
          <div className="text text_type_main-medium mt-15">Выполнено за сегодня:</div>
          <div className="text text_type_digits-large">158</div>
        </div>
      </div>
    </div>
  );
}

export default OrderFeed;
