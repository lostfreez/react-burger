import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import styles from "./MyOrder.module.css";
import React from "react";
import {
  closeWebSocket,
  initWebSocketPrivate,
  clearFeed,
} from "../../services/reducers/feedReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../services/store";
import { FeedState } from "../../services/types/types";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";

function MyOrder() {
  const dispatch: AppDispatch = useDispatch();
  const { connection, isWebSocketInitialized, orders } = useSelector(
    (state: { feed: FeedState }) => state.feed
  );
  React.useEffect(() => {
    if (!isWebSocketInitialized) {
      dispatch(initWebSocketPrivate());
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
    <div className={styles.page}>
      <ProfileNavigate />
      <div className={styles.windowOrders}>
        {orders.length !== 0 ? (
          <Feed />
        ) : (
          <p className="text_type_main-large">Заказы отсутствуют :(</p>
        )}
      </div>
    </div>
  );
}

export default MyOrder;
