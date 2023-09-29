import styles from "./OrderFeed.module.css";

function OrderFeed() {
  return (
    <div className={styles.feed}>
      <div className={`${styles.head} "text text_type_main-large mb-5 mt-10 "`}>
        Лента заказов
      </div>
      <div className={styles.window}>
        <div className={styles.orders}>
          <div className={styles.order}>
            <div className={styles.id}>#034535</div>
            <div className={styles.date}>Сегодня, 16:20 i-GMT+3</div>
            <div className={styles.burgerName }>
              Death Star Starship Main бургер Готовится
            </div>
            <div className={styles.components}>gfdhfgdh</div>
            <div className={styles.price}>fdghfgdh</div>
          </div>
        </div>
        <div className={styles.stats}>ssss</div>
      </div>
    </div>
  );
}

export default OrderFeed;
