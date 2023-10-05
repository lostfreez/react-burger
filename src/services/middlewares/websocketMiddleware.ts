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
    switch (action.type) {
      case initWebSocket.type: {
        const { url } = action.payload;

        ws = new WebSocket(url);

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
        break;
      }
      case closeWebSocket.type: {
        if (ws) {
          ws.close();
        }
        break;
      }
      default:
        return next(action);
    }
    return next(action);
  };
