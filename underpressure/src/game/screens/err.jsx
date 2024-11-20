import React from "react";
import { useNavigate } from "react-router-dom";

const Err = ({ showing }) => {
  const nav = useNavigate();

  return (
    <div className={`bg-dark text-center screen ${showing ? '' : "hidden"}`}>
      <h1>Something went wrong</h1>
      <p>I really hope you never read this message in prod.</p>
      <button class="btn btn-primary btn-lg btn-block mt-3" onClick={() => { nav('/') }}>Return to Home</button>
    </div>
  );
}

export default Err;
