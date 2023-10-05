import { useParams } from "react-router-dom";
import FeedDetails from "../components/FeedDetails/FeedDetails";
import React from "react";
import {
  closeWebSocket,
  initWebSocket,
  clearFeed,
  initWebSocketPrivate,
} from "../services/reducers/feedReducer";
import Loader from "../components/Loader/Loader";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../services/types/typedHooks";
import { useAppSelector } from "../services/types/typedHooks";

function OrderPage() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { connection, isWebSocketInitialized, orders } = useAppSelector(
    (state) => state.feed
  );
  const { id } = useParams<{ id: string }>();
  const isProfileOrdersPath = location.pathname === `/profile/orders/${id}`;
  React.useEffect(() => {
    if (!isWebSocketInitialized && isProfileOrdersPath) {
      dispatch(initWebSocketPrivate());
    } else if (!isWebSocketInitialized) {
      dispatch(initWebSocket());
    }
    return () => {
      if (isWebSocketInitialized) {
        dispatch(closeWebSocket());
        dispatch(clearFeed());
      }
    };
  }, [dispatch, isWebSocketInitialized, isProfileOrdersPath]);

  if (!connection) {
    return <Loader />;
  }
  const order = orders.find((order) => order._id === id);

  if (!order) {
    return (
      <p className="text_type_main-large">Такого заказа не существует :(</p>
    );
  }
  return orders.length !== 0 ? (
    <FeedDetails order={order} />
  ) : (
    <p className="text_type_main-large">Список заказов пуст :(</p>
  );
}

export default OrderPage;