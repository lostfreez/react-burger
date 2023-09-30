import styles from "./OrderFeed.module.css";
import OrderMyOrder from "../OrderMyOrder/OrderMyOrder";

function OrderFeed() {
  return (
    <div className={styles.feed}>
      <div className={`${styles.head} text text_type_main-large mb-5 mt-10`}>
        Лента заказов
      </div>
      <div className={styles.windowOrders}>
        <OrderMyOrder />
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
          <div className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </div>
          <div className="text text_type_digits-large">158</div>
        </div>
      </div>
    </div>
  );
}

export default OrderFeed;
