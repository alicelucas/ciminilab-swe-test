import * as tf from "@tensorflow/tfjs";
import { LayersModel } from "@tensorflow/tfjs";
import { useAppDispatch } from "app/hooks";
import { useEffect, useState } from "react";
import { modelSlice, TruncatedModelStatus } from "store/modelSlice";

export const useTruncatedModel = () => {
  const dispatch = useAppDispatch();
  const [truncatedModel, setTruncatedModel] = useState<LayersModel | null>();

  useEffect(() => {
    // Loads mobilenet and returns a model that returns the internal activation
    // we'll use as input to our classifier model.
    const loadTruncatedMobileNet = async () => {
      const mobilenet = await tf.loadLayersModel(
        "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json"
      );

      // Return a model that outputs an internal activation.
      const layer = mobilenet.getLayer("conv_pw_13_relu");

      setTruncatedModel(
        tf.model({ inputs: mobilenet.inputs, outputs: layer.output })
      );
      dispatch(
        modelSlice.actions.setTruncatedModelStatus(TruncatedModelStatus.success)
      );
    };

    loadTruncatedMobileNet().catch((err) => {
      console.log(err);
      dispatch(
        modelSlice.actions.setTruncatedModelStatus(TruncatedModelStatus.failed)
      );
    });
  }, []);

  return truncatedModel;
};
