import styles from "./OrderFeed.module.css";

function OrderFeed() {
  return (
    <div className={styles.feed}>
      <div className={`${styles.head} text text_type_main-large mb-5 mt-10`}>
        Лента заказов
      </div>
      <div className={styles.window}>
        <div className={styles.orders}>
          <div className={styles.order}>
            <div className={`${styles.id} text text_type_main-medium mt-6 ml-6`}>#034535</div>
            <div className={`${styles.date} text text_type_main-default mt-6 mr-6`}>Сегодня, 16:20 i-GMT+3</div>
            <div className={styles.burgerName}>
              Death Star Starship Main бургер Готовится
            </div>
            <div className={styles.components}></div>
            <div className={styles.price}></div>
          </div>
        </div>
        <div className={styles.stats}>ssss</div>
      </div>
    </div>
  );
}

export default OrderFeed;
