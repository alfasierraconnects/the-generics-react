import React, { createContext } from "react";
import productsArr from "../assests/Assests";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    productsArr,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
