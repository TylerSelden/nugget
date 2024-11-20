import React, { useState } from "react";

import Navbar from "../global/navbar";
import Loading from "./screens/loading";
import Err from "./screens/err";
import Main from "./screens/main";


const Game = () => {
  const [currentScreen, setCurrentScreen] = useState("loading");

  return (
    <div className="bg-dark">
      <Navbar />
      <Loading showing={ currentScreen === "loading" }/>
      <Err showing={ currentScreen === "err" }/>
      <Main showing={ currentScreen === "main" }/>
    </div>
  );
}

export default Game;
