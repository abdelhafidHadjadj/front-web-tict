import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Entropie from "../pages/Entropie";
import Huffman from "../pages/Huffman";
import Shanon from "../pages/Shanon";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entropie" element={<Entropie />} />
        <Route path="/huffman" element={<Huffman />} />
        <Route path="/shannon-fano" element={<Shanon />} />
      </Routes>
    </>
  );
};

export default Main;
