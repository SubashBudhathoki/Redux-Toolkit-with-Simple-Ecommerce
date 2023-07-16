import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./page/Cart";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
