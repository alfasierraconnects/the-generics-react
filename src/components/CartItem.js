import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const CartItem = ({ id, imageUrl, title, price, quantity }) => {
  const { removeFromCart } = useContext(StoreContext);

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center shadow-md bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-cover mr-4 rounded-lg shadow-md"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-2">Price: &#8377; {price}</p>
      </div>
      <div className="flex items-center">
        <p className="mr-4 text-lg">{quantity}</p>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
