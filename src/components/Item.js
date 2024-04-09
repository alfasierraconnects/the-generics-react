import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Item = ({ id, imageUrl, title, price }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-2">Price: &#8377; {price}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
