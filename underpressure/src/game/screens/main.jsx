import React from "react";

const Main = ({ showing }) => {
  return (
    <div className={`bg-dark text-center screen ${showing ? '' : "hidden"}`}>
      <h1>Initializing camera...</h1>
      <div id="qr" class="mx-auto">
        <div id="reader" style={{ width: "100%", height: "100%" }}></div>
      </div>
      <br />
      <h3>Players:</h3>
      <h5>Jimmy, Joey, etc.</h5>
    </div>
  );
}

export default Main;
