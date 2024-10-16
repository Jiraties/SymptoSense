import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authenticationSlice";
import conclusionSlice from "./conclusionSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    conclusion: conclusionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
