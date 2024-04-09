import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Store
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
