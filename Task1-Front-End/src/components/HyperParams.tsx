import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  modelSlice,
  selectBatchSizeFraction,
  selectDenseUnits,
  selectEpochs,
  selectLearningRate,
} from "store/modelSlice";

export const HyperParams = () => {
  const dispatch = useAppDispatch();

  const learningRate = useAppSelector(selectLearningRate);
  const batchSizeFraction = useAppSelector(selectBatchSizeFraction);
  const epochs = useAppSelector(selectEpochs);
  const denseUnits = useAppSelector(selectDenseUnits);

  return (
    <div className="hyper-params">
      <div className="dropdown">
        <label>Learning rate</label>
        <div className="select">
          <select
            defaultValue={learningRate}
            id="learningRate"
            onChange={(event) => {
              dispatch(
                modelSlice.actions.setLearningRate(parseInt(event.target.value))
              );
            }}
          >
            <option value={0.00001}>0.00001</option>
            <option value={0.0001}>0.0001</option>
            <option value={0.01}>0.001</option>
            <option value={0.03}>0.003</option>
          </select>
        </div>
      </div>

      <div className="dropdown">
        <label>Batch size</label>
        <div className="select">
          <select
            defaultValue={batchSizeFraction}
            id="batchSizeFraction"
            onChange={(event) => {
              dispatch(
                modelSlice.actions.setBatchSizeFraction(
                  parseInt(event.target.value)
                )
              );
            }}
          >
            <option value={0.05}>0.05</option>
            <option value={0.1}>0.1</option>
            <option value={0.4}>0.4</option>
            <option value={1}>1</option>
          </select>
        </div>
      </div>

      <div className="dropdown">
        <label>Epochs</label>
        <div className="select">
          <select
            defaultValue={epochs}
            id="epochs"
            onChange={(event) => {
              dispatch(
                modelSlice.actions.setEpochs(parseInt(event.target.value))
              );
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
          </select>
        </div>
      </div>

      <div className="dropdown">
        <label>Hidden units</label>
        <div className="select">
          <select
            defaultValue={denseUnits}
            id="dense-units"
            onChange={(event) => {
              dispatch(
                modelSlice.actions.setDenseUnits(parseInt(event.target.value))
              );
            }}
          >
            <option value={10}>10</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
        </div>
      </div>
    </div>
  );
};
