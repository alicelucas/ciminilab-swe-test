import { useTruncatedModel } from "hooks/useTruncatedModel";
import { JoystickPanel } from "./JoystickPanel";
import { TrainingPanel } from "./TrainingPanel";
import { ControllerDataset } from "scripts/controller_dataset";

export const Controller = () => {
  const controllerDataset = new ControllerDataset(4);

  const truncatedModel = useTruncatedModel();

  return (
    <div className="controller-panels" id="controller">
      <TrainingPanel
        controllerDataset={controllerDataset}
        truncatedModel={truncatedModel}
      />
      <JoystickPanel
        controllerDataset={controllerDataset}
        truncatedModel={truncatedModel}
      />
    </div>
  );
};
