import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import FeedDetails from "../components/FeedDetails/FeedDetails";
import Loader from "../components/Loader/Loader";
import {
  closeWebSocket,
  initWebSocket,
  clearFeed,
} from "../services/reducers/feedReducer";
import { viewOrder } from "../services/reducers/orderViewReducer";
import { WEBSOCKET_URL } from "../services/urls/urls";
import { useAppDispatch, useAppSelector } from "../services/types/typedHooks";

function OrderPage() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { connection, isWebSocketInitialized, orders } = useAppSelector(
    (state) => state.feed
  );
  const token = useAppSelector((state) => state.authentificate.token);
  const accessToken = token ? token.split(" ")[1] : null;
  const isProfileOrdersPath = location.pathname === `/profile/orders/${id}`;

  useEffect(() => {
    if (!isWebSocketInitialized) {
      const wsUrl =
        isProfileOrdersPath && accessToken
          ? `${WEBSOCKET_URL}?token=${accessToken}`
          : `${WEBSOCKET_URL}/all`;
      dispatch(initWebSocket({ url: wsUrl }));
    }
    return () => {
      if (isWebSocketInitialized) {
        dispatch(closeWebSocket());
        dispatch(clearFeed());
      }
    };
  }, [dispatch, isWebSocketInitialized, isProfileOrdersPath, accessToken]);

  const order = orders.find((order) => order._id === id);

  useEffect(() => {
    if (order) {
      dispatch(viewOrder(order));
    }
  }, [order, dispatch]);

  if (!connection) {
    return <Loader />;
  }

  if (!order) {
    return (
      <p className="text_type_main-large">Такого заказа не существует :(</p>
    );
  }

  return orders.length !== 0 ? (
    <FeedDetails />
  ) : (
    <p className="text_type_main-large">Список заказов пуст :(</p>
  );
}

export default OrderPage;
