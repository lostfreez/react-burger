import styles from "./OrderFeed.module.css";
import React from "react";
import {
  closeWebSocket,
  initWebSocket,
  clearFeed,
} from "../../services/reducers/feedReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../services/store";
import { FeedState } from "../../services/types/types";
import FeedStat from "../FeedStat/FeedStat";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";

function OrderFeed() {
  const dispatch: AppDispatch = useDispatch();
  const { connection, isWebSocketInitialized, orders } = useSelector(
    (state: { feed: FeedState }) => state.feed
  );
  React.useEffect(() => {
    if (!isWebSocketInitialized) {
      dispatch(initWebSocket());
    }

    return () => {
      if (isWebSocketInitialized) {
        dispatch(closeWebSocket());
        dispatch(clearFeed());
      }
    };
  }, [dispatch, isWebSocketInitialized]);

  if (!connection) {
    return <Loader />;
  }

  return (
    <div className={styles.feed}>
      <div className={`${styles.head} text text_type_main-large mb-5 mt-10`}>
        Лента заказов
      </div>
      <div className={styles.windowOrders}>
        {orders.length !== 0 ? (
          <Feed />
        ) : (
          <p className="text_type_main-large">Заказы отсутствуют :(</p>
        )}
        <FeedStat />
      </div>
    </div>
  );
}

export default OrderFeed;
