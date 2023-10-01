import React from "react";
import styles from "./FeedStat.module.css";
import { FeedState } from "../../services/types/types";
import { useSelector } from "react-redux";
import formatNumber from "../../services/format/formatNumber";
import LastOrders from "../LastOrders/LastOrders";
import QueueOrders from "../QueueOrders/QueueOrders";

const FeedStat = () => {
  const feed = useSelector((state: { feed: FeedState }) => state.feed);
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
