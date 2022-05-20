// import "./pacman-google.js";
import React, { useEffect } from "react";
import { Controller } from "components/Controller";
import { PacmanContainer } from "components/PacmanConatiner";
import { useAppSelector } from "app/hooks";
import { selectWebcamStatus, WebcamStatus } from "store/uiSlice";
import {
  selectTruncatedModelStatus,
  TruncatedModelStatus,
} from "store/modelSlice";

function App() {
  useEffect(() => {
    require("pacman-google");
  }, []);

  const webcamStatus = useAppSelector(selectWebcamStatus);
  const truncatedModelStatus = useAppSelector(selectTruncatedModelStatus);

  return (
    <div className="App" id="App">
      <header>
        Turn your <b>Web Camera</b> into a controller using a{" "}
        <b>Neural Network</b>.
      </header>

      {webcamStatus === WebcamStatus.failed && (
        <div id="no-webcam">
          No webcam found. <br />
          To use this demo, use a device with a webcam.
        </div>
      )}

      <PacmanContainer />

      {truncatedModelStatus === TruncatedModelStatus.pending && (
        <div id="status">Loading mobilenet...</div>
      )}
      {truncatedModelStatus === TruncatedModelStatus.failed && (
        <div id="status">Loading mobilenet failed</div>
      )}

      <Controller />

      <p id="copyright">
        PAC-MAN&trade; &copy; BANDAI NAMCO Entertainment Inc.
      </p>
    </div>
  );
}

export default App;
