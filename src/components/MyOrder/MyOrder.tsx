import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import styles from "./MyOrder.module.css";
import React from "react";
import {
  closeWebSocket,
  clearFeed,
  initWebSocket,
} from "../../services/reducers/feedReducer";
import Loader from "../Loader/Loader";
import Feed from "../Feed/Feed";
import { useAppDispatch } from "../../services/types/typedHooks";
import { useAppSelector } from "../../services/types/typedHooks";
import { WEBSOCKET_URL } from "../../services/urls/urls";

function MyOrder() {
  const dispatch = useAppDispatch();
  const { connection, isWebSocketInitialized, orders } = useAppSelector(
    (state) => state.feed
  );
  const token = useAppSelector((state) => state.authentificate.token);
  const accessToken = token ? token.split(" ")[1] : null;
  React.useEffect(() => {
    if (!isWebSocketInitialized) {
      const wsUrl = `${WEBSOCKET_URL}?token=${accessToken}`;
      dispatch(initWebSocket({ url: wsUrl }));
    }

    return () => {
      if (isWebSocketInitialized) {
        dispatch(closeWebSocket());
        dispatch(clearFeed());
      }
    };
  }, [dispatch, isWebSocketInitialized, accessToken]);

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
