import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { cartList } = useContext(StoreContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalQuantity = cartList.reduce((acc, el) => acc + el.quantity, 0);
    setCartCount(totalQuantity);
  }, [cartList]);

  return (
    <div className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">
          Home
        </Link>
        <div className="space-x-4 text-lg">
          <Link to="/" className="hover:underline">
            Store
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/cart" className="hover:underline relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
