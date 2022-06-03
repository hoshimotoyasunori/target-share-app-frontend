import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import targetReducer from "../features/target/targetSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    target: targetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;