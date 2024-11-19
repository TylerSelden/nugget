import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.scss";

import Home from "./home/home";
import Game from "./game/game";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/game" element={ <Game /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
)
