import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import styles from "./MyOrder.module.css";
import React from "react";
import {
  closeWebSocket,
  initWebSocketPrivate,
  clearFeed,
} from "../../services/reducers/feedReducer";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";
import { useAppDispatch } from "../../services/types/typedHooks";
import { useAppSelector } from "../../services/types/typedHooks";

function MyOrder() {
  const dispatch = useAppDispatch();
  const { connection, isWebSocketInitialized, orders } = useAppSelector(
    (state) => state.feed
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
