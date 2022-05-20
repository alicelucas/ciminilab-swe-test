import { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { ControllerDataset } from "scripts/controller_dataset";
import { LayersModel } from "@tensorflow/tfjs";
import { CONTROLS } from "app/constants";

const draw = (image: tf.Tensor<tf.Rank>, canvas: HTMLCanvasElement) => {
  const [width, height] = [224, 224];
  const ctx = canvas.getContext("2d");
  const imageData = new ImageData(width, height);
  const data = image.dataSync();
  for (let i = 0; i < height * width; ++i) {
    const j = i * 4;
    imageData.data[j + 0] = (data[i * 3 + 0] + 1) * 127;
    imageData.data[j + 1] = (data[i * 3 + 1] + 1) * 127;
    imageData.data[j + 2] = (data[i * 3 + 2] + 1) * 127;
    imageData.data[j + 3] = 255;
  }
  ctx!.putImageData(imageData, 0, 0);
};

export const RecordButton = ({ label, controllerDataset, truncatedModel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const direction = CONTROLS[label];

  return (
    <div className="thumb-box">
      <div className="thumb-box-outer">
        <div className="thumb-box-inner">
          <canvas
            className="thumb"
            width={224}
            height={224}
            id={direction + "-thumb"}
            ref={canvasRef}
          ></canvas>
        </div>
        <button className="record-button" id={direction}>
          <span>Add Sample</span>
        </button>
      </div>
      <p>
        <span id={direction + "-total"}>{count}</span> examples
      </p>
    </div>
  );
};
