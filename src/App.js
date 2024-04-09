import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
};

export default App;
