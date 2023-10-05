import styles from "./OrderFeed.module.css";
import React from "react";
import {
  closeWebSocket,
  initWebSocket,
  clearFeed,
} from "../../services/reducers/feedReducer";
import { useAppSelector } from "../../services/types/typedHooks";
import FeedStat from "../FeedStat/FeedStat";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";
import { useAppDispatch } from "../../services/types/typedHooks";
import { WEBSOCKET_URL } from "../../services/urls/urls";

function OrderFeed() {
  const dispatch = useAppDispatch();
  const { connection, isWebSocketInitialized, orders } = useAppSelector(
    (state) => state.feed
  );
  React.useEffect(() => {
    if (!isWebSocketInitialized) {
      dispatch(initWebSocket({url: `${WEBSOCKET_URL}/all`}));
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
