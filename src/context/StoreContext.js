import React, { createContext, useState } from "react";
import assests from "../assests/Assests";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id) => {
    const existingItem = cartList.find((el) => el.id === id);

    if (existingItem) {
      // If item already exists in cart, update its quantity
      setCartList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If item does not exist in cart, add it with quantity 1
      const newItem = { id: id, quantity: 1 };
      setCartList((prev) => [...prev, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cartList.find((el) => el.id === id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        // If quantity is 1, remove the item from cart
        setCartList((prev) => prev.filter((item) => item.id !== id));
      } else {
        // If quantity is more than 1, decrease the quantity by 1
        setCartList((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    }
  };

  const contextValue = {
    productsArr: assests.productsArr,
    liveShows: assests.liveShows,
    cartList,
    setCartList,
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
