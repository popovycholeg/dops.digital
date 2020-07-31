import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mediumReducer from "./slices/mediumSectionSlice";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    mediumReducer: mediumReducer,
  },
  middleware,
  devTools: false,
});
