import { configureStore } from "@reduxjs/toolkit";
import { websocketMiddleware } from "./middlewares/websocketMiddleware";
import rootReducer from "./root";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
