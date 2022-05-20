import { LayersModel } from "@tensorflow/tfjs";
import joystick from "images/joystick.png";
import { ControllerDataset } from "scripts/controller_dataset";
import { RecordButton } from "./RecordButton";

export const JoystickPanel = ({ controllerDataset, truncatedModel }) => {
  return (
    <>
      <div className="panel joystick-panel">
        <div className="panel-row panel-row-top">
          <div className="panel-cell panel-cell-left panel-cell-fill">
            <p className="help-text">
              Click to add the <br />
              current camera <br />
              view as an example <br />
              for that control
            </p>
          </div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-center">
            <RecordButton label={0} />
          </div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-right panel-cell-fill"></div>
          {/* ./panel-cell */}
        </div>
        {/* /.panel-row */}
        <div className="panel-row panel-row-middle">
          <div className="panel-cell panel-cell-left">
            <RecordButton label={2} />
          </div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-center panel-cell-fill">
            <img height="108" width="129" alt="joystick" src={joystick} />
          </div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-right">
            <RecordButton
              label={3}
              controllerDataset={controllerDataset}
              truncatedModel={truncatedModel}
            />
          </div>
          {/* ./panel-cell */}
        </div>
        {/* /.panel-row */}

        <div className="panel-row panel-row-bottom">
          <div className="panel-cell panel-cell-left panel-cell-fill"></div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-center">
            <RecordButton
              label={1}
              webcam={webcam}
              controllerDataset={controllerDataset}
              truncatedModel={truncatedModel}
            />
          </div>
          {/* ./panel-cell */}

          <div className="panel-cell panel-cell-right panel-cell-fill"></div>
          {/* ./panel-cell */}
        </div>
        {/* /.panel-row */}
      </div>
      {/* /.panel */}
    </>
  );
};
