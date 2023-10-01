import { Middleware } from "redux";
import {
  wsError,
  setOrders,
  closeWebSocket,
  initWebSocket,
  initWebSocketPrivate,
  disconnectWebSocket,
} from "../reducers/feedReducer";
import { WEBSOCKET_URL } from "../urls/urls";

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
        ws = new WebSocket(`${WEBSOCKET_URL}?token=${accessToken}`);
      } else {
        ws = new WebSocket(`${WEBSOCKET_URL}/all`);
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
