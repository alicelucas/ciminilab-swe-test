import { webcam } from "@tensorflow/tfjs-data";

type WebcamIterator = Awaited<ReturnType<typeof webcam>>;
