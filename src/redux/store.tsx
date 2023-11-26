import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const userData = (state: RootState) => state.user;
