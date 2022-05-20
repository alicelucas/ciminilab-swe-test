import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export enum TruncatedModelStatus {
  "pending",
  "success",
  "failed",
}

export interface ModelState {
  truncatedModelStatus: TruncatedModelStatus;
  learningRate: number;
  batchSizeFraction: number;
  epochs: number;
  denseUnits: number;
  predicting: boolean;
}

const initialState: ModelState = {
  truncatedModelStatus: TruncatedModelStatus.pending,
  learningRate: 0.001,
  batchSizeFraction: 0.4,
  epochs: 20,
  denseUnits: 100,
  predicting: false,
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setTruncatedModelStatus: (
      state,
      action: PayloadAction<TruncatedModelStatus>
    ) => {
      state.truncatedModelStatus = action.payload;
    },
    setLearningRate: (state, action: PayloadAction<number>) => {
      state.learningRate = action.payload;
    },
    setBatchSizeFraction: (state, action: PayloadAction<number>) => {
      state.batchSizeFraction = action.payload;
    },
    setEpochs: (state, action: PayloadAction<number>) => {
      state.epochs = action.payload;
    },
    setDenseUnits: (state, action: PayloadAction<number>) => {
      state.denseUnits = action.payload;
    },
    setPredicting: (state, action: PayloadAction<boolean>) => {
      state.predicting = action.payload;
    },
  },
  extraReducers: () => {},
});

export const selectTruncatedModelStatus = (state: RootState) =>
  state.model.truncatedModelStatus;
export const selectLearningRate = (state: RootState) =>
  state.model.learningRate;
export const selectBatchSizeFraction = (state: RootState) =>
  state.model.batchSizeFraction;
export const selectEpochs = (state: RootState) => state.model.epochs;
export const selectDenseUnits = (state: RootState) => state.model.denseUnits;
export const selectPredicting = (state: RootState) => state.model.predicting;

export default modelSlice.reducer;
