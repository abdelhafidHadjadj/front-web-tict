import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Entropie from "../pages/Entropie";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/entropie" element={<Entropie />} />
      </Routes>
    </>
  );
};

export default Main;
