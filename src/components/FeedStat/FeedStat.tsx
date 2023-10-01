import styles from "./FeedStat.module.css";
import { useAppSelector } from "../../services/types/typedHooks";
import formatNumber from "../../services/format/formatNumber";
import LastOrders from "../LastOrders/LastOrders";
import QueueOrders from "../QueueOrders/QueueOrders";

const FeedStat = () => {
  const feed = useAppSelector(state => state.feed);
  return (
    <div className={styles.stats}>
      <div className={styles.windowStats}>
        <div className="text ttext text_type_main-medium">Готовы:</div>
        <div className="text ttext text_type_main-medium">В работе:</div>
        <div className={styles.queueDone}>
          <LastOrders />
        </div>
        <div className={styles.queueProcess}>
          <QueueOrders />
        </div>
      </div>
      <div className="text text_type_main-medium mt-15">
        Выполнено за все время:
      </div>
      <div className="text text_type_digits-large">
        {formatNumber(feed.total)}
      </div>
      <div className="text text_type_main-medium mt-15">
        Выполнено за сегодня:
      </div>
      <div className="text text_type_digits-large">{feed.totalToday}</div>
    </div>
  );
};

export default FeedStat;
