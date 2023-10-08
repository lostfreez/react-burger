import { Middleware } from "redux";
import { WSMiddlewareConfig } from "../types/types";

let ws: WebSocket | null = null;

export const createWebsocketMiddleware = (
  config: WSMiddlewareConfig
): Middleware => {
  return (store) => (next) => (action) => {
    switch (action.type) {
      case config.initActionType: {
        const { url } = action.payload;

        ws = new WebSocket(url);

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          store.dispatch({ type: config.onMessageActionType, payload: data });
        };

        ws.onerror = () => {
          store.dispatch({
            type: config.onErrorActionType,
            payload: "WebSocket error",
          });
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
      case config.closeActionType: {
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
};
