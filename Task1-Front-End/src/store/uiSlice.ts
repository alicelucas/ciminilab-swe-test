import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export enum WebcamStatus {
  "none",
  "success",
  "failed",
}

export interface UIState {
  webcamStatus: WebcamStatus;
}

const initialState: UIState = {
  webcamStatus: WebcamStatus.none,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setWebcamStatus: (state, action: PayloadAction<WebcamStatus>) => {
      state.webcamStatus = action.payload;
    },
  },
  extraReducers: () => {},
});

export const selectWebcamStatus = (state: RootState) => state.ui.webcamStatus;

export default uiSlice.reducer;
