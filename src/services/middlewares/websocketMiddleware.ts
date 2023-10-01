import { Middleware } from "redux";
import {
  wsError,
  setOrders,
  closeWebSocket,
  initWebSocket,
  initWebSocketPrivate,
  disconnectWebSocket,
} from "../reducers/feedReducer";

let ws: WebSocket | null = null;

export const websocketMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (
      action.type === initWebSocket.type ||
      action.type === initWebSocketPrivate.type
    ) {
      if (action.type === initWebSocketPrivate.type) {
        const token = store.getState().authentificate.token;
        const accessToken = token.split(" ")[1];
        ws = new WebSocket(
          `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        );
      } else {
        ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");
      }

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.success) {
          store.dispatch(setOrders(data));
        } else {
          store.dispatch(wsError(data.message));
        }
      };

      ws.onerror = () => {
        store.dispatch(wsError("WebSocket error"));
      };

      ws.onclose = (event) => {
        if (!event.wasClean) {
          console.error(
            "WebSocket connection closed unexpectedly:",
            event.code
          );
        }
      };
    } else if (
      action.type === closeWebSocket.type ||
      action.type === disconnectWebSocket.type
    ) {
      if (ws) {
        ws.close();
      }
    }

    return next(action);
  };
