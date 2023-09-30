import { Middleware } from "redux";
import {
  wsError,
  setOrders,
  closeWebSocket,
  initWebSocket,
} from "../reducers/feedReducer";

let ws: WebSocket | null = null;

export const websocketMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (action.type === initWebSocket.type) {
      ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");

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
          console.error("WebSocket connection closed unexpectedly");
        }
      };
    } else if (action.type === closeWebSocket.type) {
      if (ws) {
        ws.close();
      }
    }

    return next(action);
  };
