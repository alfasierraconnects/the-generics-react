import React, { createContext, useState } from "react";
import productsArr from "../assests/Assests";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id) => {
    setCartList((prev) => [...prev, id]);
  };

  const removeFromCart = (id) => {
    setCartList((prev) => prev.filter((item) => item !== id));
  };

  const contextValue = {
    productsArr,
    cartList,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
