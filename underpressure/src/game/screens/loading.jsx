import React from "react";

const Loading = ({ showing }) => {
  return (
    <div className={`bg-dark text-center screen ${showing ? '' : "hidden"}`}>
      <div className="spinner-border text-danger mb-4"></div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
