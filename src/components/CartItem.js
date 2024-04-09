import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const CartItem = ({ id, imageUrl, title, price }) => {
  const { removeFromCart } = useContext(StoreContext);

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-cover mr-4 rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">Price: &#8377; {price}</p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
