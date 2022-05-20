import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "store/uiSlice";
import modelReducer from "store/modelSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    model: modelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
