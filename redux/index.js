import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import priceReducer from "./slices/priceSlice";

export const store = configureStore({
  reducer: {
    priceReducer: priceReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});
