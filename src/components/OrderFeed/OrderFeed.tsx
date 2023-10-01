import styles from "./OrderFeed.module.css";
import React from "react";
import {
  closeWebSocket,
  initWebSocket,
} from "../../services/reducers/feedReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../services/store";
import { FeedState } from "../../services/types/types";
import FeedStat from "../FeedStat/FeedStat";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";


function OrderFeed() {
  const dispatch: AppDispatch = useDispatch();
  const { orders, isWebSocketInitialized  } = useSelector((state: { feed: FeedState }) => state.feed);
  React.useEffect(() => {
    if (!isWebSocketInitialized) {
      dispatch(initWebSocket());
    }

    return () => {
      if (isWebSocketInitialized) {
        dispatch(closeWebSocket());
      }
    };
  }, [dispatch, isWebSocketInitialized]);

  if (orders.length === 0) {
    return <Loader />;
  }

  return (
    <div className={styles.feed}>
      <div className={`${styles.head} text text_type_main-large mb-5 mt-10`}>
        Лента заказов
      </div>
      <div className={styles.windowOrders}>
        <Feed />
        <FeedStat />
      </div>
    </div>
  );
}

export default OrderFeed;
