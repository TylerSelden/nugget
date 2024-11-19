import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";

import Home from "./home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
)
