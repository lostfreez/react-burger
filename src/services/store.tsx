import { configureStore } from "@reduxjs/toolkit";
import { createWebsocketMiddleware } from "./middlewares/websocketMiddleware";
import { feedWsConfig } from "./middlewares/websocketConfig";
import rootReducer from "./root";

const wsMiddleware = createWebsocketMiddleware(feedWsConfig);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wsMiddleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
