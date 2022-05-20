import { ControllerDataset } from "scripts/controller_dataset";
import { HyperParams } from "./HyperParams";
import { PredictButton } from "./PredictButton";
import { Sequential, LayersModel } from "@tensorflow/tfjs";
import { TrainButton } from "./TrainButton";
import { useState } from "react";

export const TrainingPanel = ({ controllerDataset, truncatedModel }) => {
  const [model, setModel] = useState<Sequential>();

  return (
    <div className="panel training-panel">
      <div className="panel-row big-buttons">
        <TrainButton
          controllerDataset={controllerDataset}
          setModel={setModel}
          truncatedModel={truncatedModel}
        />
        <PredictButton
          webcam={webcam}
          truncatedModel={truncatedModel}
          model={model}
        />
      </div>

      <div className="panel-row params-webcam-row">
        <HyperParams />

        <div className="webcam-box-outer">
          <div className="webcam-box-inner">
            <video
              autoPlay
              playsInline
              muted
              id="webcam"
              width="225"
              height="225"
              ref={webcamRef}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
