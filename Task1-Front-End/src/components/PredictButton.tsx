import { useAppDispatch, useAppSelector } from "app/hooks";
import button from "images/button.svg";
import { modelSlice, selectPredicting } from "store/modelSlice";
import { WebcamIterator } from "types";
import { CONTROLS, CONTROL_CODES } from "app/constants";
import * as tf from "@tensorflow/tfjs";
import { useEffect } from "react";

export function predictClass(classId: number) {
  //@ts-ignore
  window.google.pacman.keyPressed(CONTROL_CODES[classId]);
  document.body.setAttribute("data-active", CONTROLS[classId]);
}

/**
 * Captures a frame from the webcam and normalizes it between -1 and 1.
 * Returns a batched image (1-element batch) of shape [1, w, h, c].
 */
const getImage = async (webcam: WebcamIterator) => {
  const img = await webcam.capture();
  const processedImg = tf.tidy(() =>
    img.expandDims(0).toFloat().div(127).sub(1)
  );
  img.dispose();
  return processedImg;
};

export const PredictButton = ({ webcam, truncatedModel, model }) => {
  const dispatch = useAppDispatch();

  const isPredicting = useAppSelector(selectPredicting);

  const predictHandler = () => {
    //@ts-ignore
    window.google.pacman.startGameplay();
    dispatch(modelSlice.actions.setPredicting(true));
  };

  useEffect(() => {
    if (isPredicting && webcam && truncatedModel && model) {
      // do predictions (run inferrence)
    }
  }, [isPredicting, model, truncatedModel, webcam]);

  return (
    <button id="predict" onClick={predictHandler}>
      <img width="66" height="66" alt="predict button" src={button} />
      <span>PLAY</span>
    </button>
  );
};
